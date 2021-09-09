import { useEffect, useReducer } from 'react'

import db from '../firebase'
import {getDocs, collection } from 'firebase/firestore'

const useFetchInitialData = ( collectionName ) => {

  const initialState = {
    loading: true,
    error: null,
    data: []
  }

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'LOADING':
        return { ...initialState, loading: true }
      case 'LOADED': 
        return { ...initialState, loading: false, data: action.payload }
      case 'LOADING_ERROR':
        return { ...initialState, loading: false, error: action.payload }
      default:
        return state
    }
  }, initialState)
  
  useEffect(() => {
    try {
      // Parameter must be passed to hook or it short-circuits
      if (!collectionName) {
        throw new SyntaxError('A parameter must be provided to Function useFetchInitialData()')
      }
    } catch (err) {
      dispatch({ type: 'LOADING_ERROR', payload: err.message })
      // Short-circuit rest of function since no parameter was given
      return
    }
    
    const retrieveData = async () => {
      dispatch({ type: 'LOADING' })
      let collData
      
      // If it is in localStorage...
      if (localStorage.getItem(collectionName)) {
        console.info('Retrieving from local storage')
        // ... get it from localStorage...
        collData = JSON.parse(localStorage.getItem(collectionName))
        // (sort data by id (if id property exists) for consistent rendering on page)
        collData.sort((a, b) => a.id - b.id)
        // ... and set it as our state
        dispatch({ type: 'LOADED', payload: collData })

        // Else make a request to Firestore to get the data
      } else {
        console.info('Retrieving from Firestore')
        let snapshot

        try {
          snapshot = await getDocs(collection(db, collectionName))
        } catch (err) {
          dispatch({ type: 'LOADING_ERROR', payload: err.message })
          return
        }
          
        collData = snapshot.docs.map(doc => doc.data())

        // (sort data by id (if id property exists) for consistent rendering on page)
        collData.sort((a, b) => a.id - b.id)

        // Set Firestore data as our state...
        dispatch({ type: 'LOADED', payload: collData })

        // ... and also in localStorage.
        localStorage.setItem(collectionName, JSON.stringify(collData))
      }
    }

    try {
      retrieveData()
    } catch (err) {
      dispatch({ type: 'LOADING_ERROR', payload: err.message })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) 

  return state
}

export default useFetchInitialData