import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SearchAppBar from './SearchAppBar'
import ClippedDrawer from './ClippedDrawer'
import MobileDrawer from './MobileDrawer'
import SeriesList from './SeriesList'
import BooksList from './BooksList'
import SectionsList from './SectionsList'

const useResponsiveDrawerStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
}))

const ResponsiveDrawer = () => {
  const classes = useResponsiveDrawerStyles()
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  }

  const drawerContent = (
    <SeriesList>
      <BooksList>
        <SectionsList />
      </BooksList>
    </SeriesList>
  )

  return (
    <nav className={classes.root}>
      <SearchAppBar handleDrawerToggle={handleDrawerToggle} />
      <ClippedDrawer>{drawerContent}</ClippedDrawer>
      <MobileDrawer mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle}>{drawerContent}</MobileDrawer>
    </nav>
  )
}

export default ResponsiveDrawer