import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles';
import { FirestoreContext } from './Contexts/FirestoreProvider'

const useSectionsListStyles = makeStyles((theme) => ({
  sectionBlock: {
    paddingTop: 0,
    paddingBottom: 0,
  }
}))

const SectionsList = ({ book }) => {
  const classes = useSectionsListStyles()

  // State
  const { sections } = React.useContext(FirestoreContext)

  const sectionItems = book.published ? (
    sections.data.filter((bookSections) => {
      return book.name === bookSections.name
    }).map(bookSections => {
      return bookSections.sections.map(section => {
        
        const chapters = section.chapters.map(chapter => {
          return (
            <ListItem key={chapter.id} style={{paddingLeft: 0}}>
              <Typography>
                <Link href="#">
                  {chapter.name}
                </Link>
              </Typography>
            </ListItem>
          )
        })

        return (
            <ListItem key={section.id} classes={{
              root: classes.sectionBlock
            }}>
              <List disablePadding>
                <Typography component="li" variant="body1">
                  {section.name}
                </Typography>
                {chapters}
              </List>
            </ListItem>
        )
      })
    })
  ) : null

  return (
    <List disablePadding>
      {sectionItems}
    </List>
  )
}

export default SectionsList