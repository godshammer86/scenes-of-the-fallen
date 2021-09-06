import React, {createContext} from 'react'
import useFetchInitialData from '../../hooks/useFetchInitialData'

let FirestoreContext = createContext()


const FirestoreProvider = ({ children }) => {
  const series = useFetchInitialData('series')
  const books = useFetchInitialData('books')
  const sections = useFetchInitialData('sections')

  return (
    <FirestoreContext.Provider value={{ series, books, sections }}>
      {children}
    </FirestoreContext.Provider>
  )
}

export { FirestoreProvider, FirestoreContext }