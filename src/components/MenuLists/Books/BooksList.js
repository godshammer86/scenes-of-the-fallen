import React, { useState, useContext, useEffect } from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'
import Collapse from '@material-ui/core/Collapse'

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import FirestoreContext from '../../Contexts/FirestoreContext'
import useBooksListStyles from './BooksList.styles'

const BooksList = ({ series, selectedSeriesId, children }) => {
  const classes = useBooksListStyles()

  // State
  const { books } = useContext(FirestoreContext)
  const [selectedBookId, setSelectedBookId] = useState(0)

  // Event handlers
  const handleToggleBook = (id) => {
    if (selectedBookId === id) {
      setSelectedBookId(0)
    } else {
      setSelectedBookId(id)
    }
  }

  useEffect(() => {
    // If series section is closed, close open book sections as well
    if (selectedSeriesId !== series.id) {
      setSelectedBookId(0)
    }
  }, [selectedSeriesId, series.id])

  const bookItems = books.data.filter((book) => {
    return book.series.series === series.name
  }).map((bookItem) => {

      // Prologue/Epilogue
  const prologue = bookItem.prologue.hasPrologue && (
    <ListItem>
      <Typography>
        <Link href="#">
          {bookItem.prologue.prologueName}
        </Link>
      </Typography>
    </ListItem>
  )

  const epilogue1 = bookItem.epilogue.hasEpilogue1 && (
    <ListItem>
      <Typography>
        <Link href="#">
          {bookItem.epilogue.epilogue1Name}
        </Link>
      </Typography>
    </ListItem>
  )

  const epilogue2 = bookItem.epilogue.hasEpilogue2 && (
    <ListItem>
      <Typography>
        <Link href="#">
          {bookItem.epilogue.epilogue2Name}
        </Link>
      </Typography>
    </ListItem>
  )

    return (
      <ListItem
        key={bookItem.id}
        classes={{
          root: classes.listSubheader
        }}
      >
        <Button
          variant="text"
          disabled={!bookItem.published}
          onClick={() => {
            handleToggleBook(bookItem.id)
          }}
          classes={{
            root: classes.button,
            text: classes.buttonText,
            label: classes.buttonLabel,
          }}
        >
          {bookItem.name}
          {
            bookItem.hasSections ? (
              bookItem.id === selectedBookId ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />
            ) : null
          }
        </Button>
        
        <Collapse in={bookItem.id === selectedBookId}>
            <List>
            {prologue}
            {
              React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                  book: bookItem
                })
              })
            }
            {epilogue1}
            {epilogue2}
            </List>
        </Collapse>
      </ListItem>
    )
  })

  return (
    <List>
      {bookItems}
    </List>
  )
}

export default BooksList