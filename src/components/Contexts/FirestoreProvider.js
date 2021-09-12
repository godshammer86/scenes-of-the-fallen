import React from 'react'
import BlockingLoader from '../BlockingLoader'
import useFetchInitialData from '../../hooks/useFetchInitialData'

const FirestoreContext = React.createContext()

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
export { FirestoreContext }
export default FirestoreProvider