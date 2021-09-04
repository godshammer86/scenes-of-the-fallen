import { useState, useEffect } from 'react'
import SearchAppBar from './components/SearchAppBar/SearchAppBar'
import VerticalMenu from './components/VerticalMenu/VerticalMenu';

import db from './firebase'
import {getDocs, collection } from 'firebase/firestore'

import './App.css';

const App = () => {
  // References to Firebase collections
  const seriesCollection = collection(db, 'series')
  const booksCollection = collection(db, 'books')
  const sectionsCollection = collection(db, 'sections')
  
  // State values
  let [series, setSeries] = useState(JSON.parse(localStorage.getItem('series')))
  let [books, setBooks] = useState(JSON.parse(localStorage.getItem('books')))
  let [sections, setSections] = useState(JSON.parse(localStorage.getItem('sections')))

  let [loading, setLoading] = useState(true)
  let [isMenuOpen, toggleIsMenuOpen] = useState(false)

  // Helper function to load data from Firebase
  async function loadCollection(collRef, stateValue, setStateFunction) {
    if (stateValue == null) {
      await getDocs(collRef)
      .then((snapshot) => {
        const collection = []
        snapshot.forEach(doc => {
          collection.push(doc.data())
        })
        setStateFunction(collection)
      }).catch(error => {
        console.log(error)
      })
    }
  }

  // Side effects
  useEffect(() => {
    setLoading(true)
    Promise.all([
      loadCollection(seriesCollection, series, setSeries),
      loadCollection(booksCollection, books, setBooks),
      loadCollection(sectionsCollection, sections, setSections),
    ]).then(() => {
      setLoading(false)
    })
  }, [])

  useEffect(() => {
    localStorage.setItem('series', JSON.stringify(series))
    localStorage.setItem('books', JSON.stringify(books))
    localStorage.setItem('sections', JSON.stringify(sections))
  }, [series, books, sections])
  

  // Handler functions
  const handleMenuClick = (e) => {
    toggleIsMenuOpen(prevState => !prevState)
  }

  if (!loading) {
    if (series) {
      console.log('Series', series)
    }
    if (books) {
      console.log('Books', books)
    }
    if (sections) {
      console.log('Sections', sections)
    }
  }

  return (
    <div className="App">
      <SearchAppBar menuClick={handleMenuClick}/>
      <VerticalMenu menuOpen={isMenuOpen} />
    </div>
  );
}

export default App;
