import React, { useState } from 'react'
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'
import Typography from '@material-ui/core/Typography'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import { makeStyles } from '@material-ui/core/styles'

import malazanBooks from '../src/data/testData'

const useStyles = makeStyles((theme) => ({
  listItem: {
    flexDirection: 'column',
  },
  seriesList: {
    paddingBottom: '0px',
  },
  seriesSubheader: {
    backgroundColor: theme.palette.primary.light,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  seriesSubheaderText: {
    textTransform: 'uppercase',
    fontWeight: theme.typography.fontWeightBold
  }
}))

const NestedList = () => {

  const classes = useStyles()

  const mapMenuData = () => {
    return mapSeries();
  }
  
  const mapSeries = () => {
    return malazanBooks.map(series => {
      return (
        <List
          className={classes.seriesList}
          key={series.id}
          subheader={ 
            <ListSubheader className={classes.seriesSubheader}>
              <Typography noWrap component='h3' className={classes.seriesSubheaderText}>
                  {series.name}
              </Typography>
            </ListSubheader> 
          }
        >
          <Collapse>
            { mapBooks(series.books) }
          </Collapse>
        </List>
      )
    })
  }
  
  const mapBooks = (books) => {
    return (
      <List>
        {
          books.map(book => {
            if (book.published) {
              { /* published books */ }
              return (
                <ListItem
                  className={classes.listItem}
                  alignItems='flex-start'
                  key={book.id}
                >
                  <ListItemText primary={book.name} noWrap />
                  {/* <Collapse> */}
                    { mapChaptersAndSections(book) }
                  {/* </Collapse> */}
                </ListItem>
              )
            } else {
              { /* unpublished books */ }
              return (
                <ListItem
                  className={classes.listItem}
                  alignItems='flex-start'
                  key={book.id}
                >
                  <ListItemText secondary={book.name} noWrap />
                </ListItem>
              )
            }
          })
        }
      </List>
    )
  }
  
  const mapChaptersAndSections = (book) => {
    const { prologue, epilogue, hasSections, sections, chapters } = book
    return (
      <Collapse collapsedSize='0px'>
      <List>
        {
          prologue && prologue.hasPrologue ? (
            <ListItem
              className={classes.listItem}
              alignItems='flex-start'
              key="0"
            >
              <ListItemText primary={prologue.prologueTitle} noWrap />
            </ListItem>
          ) : null
        }
        {
          hasSections ? (
            sections.map(section => (
              <List
                key={section.id}
              >
                <ListItem 
                  id={section.id}
                  className={classes.listItem}
                  alignItems='flex-start'
                >
                  <ListItemText secondary={section.name} noWrap />
                </ListItem>
                {
                  mapChapters(section.chapters)
                }
              </List>
  
            ))
          ) : (
            chapters && mapChapters(chapters)
          )
        }
        {
          epilogue && Array.isArray(epilogue) ? (
            epilogue.map((epil, index) => (
              <ListItem 
                key={index}
                alignItems='flex-start'
                className={classes.listItem}
              >
                <ListItemText primary={epil} noWrap />
              </ListItem>
            ))
          ) : null
        }
        {
          epilogue && epilogue.hasEpilogue ? (
            <ListItem 
              key="100" 
              className={classes.listItem}
              alignItems='flex-start'
              >
              <ListItemText primary={epilogue.epilogueTitle} noWrap />
            </ListItem>
          ) : null
        }
      </List>
      </Collapse>
    )
  }
  
  const mapChapters = (chapters) => {
    if (typeof chapters === 'number') {
      chapters = Array.from({length: chapters}, (_, i) => i + 1 )
    }
  
    return chapters.map(chapter => (
      <ListItem key={chapter.id || chapter}>
        <ListItemText primary={typeof chapter === 'number' ? `Chapter ${chapter}` : chapter.title} noWrap />
      </ListItem>
    ))
  }

  return (
    <>
      {mapMenuData()}
    </>
  )
}

export default NestedList