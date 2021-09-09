import React from 'react'
import BlockingLoader from '../BlockingLoader/BlockingLoader'
import useFetchInitialData from '../../hooks/useFetchInitialData'

import FirestoreContext from './FirestoreContext'

const FirestoreProvider = ({ children }) => {
  const series = useFetchInitialData('series')
  const books = useFetchInitialData('books')
  const sections = useFetchInitialData('sections')

  const loading = series.loading || books.loading || sections.loading

  return (
    <FirestoreContext.Provider value={{ series, books, sections }}>
      { loading 
        ? (
        <BlockingLoader backdropOpen={loading}>
          {children}
        </BlockingLoader>
        ) 
        : children
      }
    </FirestoreContext.Provider>
  )
}

export default FirestoreProvider