import React from 'react'

import SearchAppBar from '../SearchAppBar/SearchAppBar'
import ClippedDrawer from './ClippedDrawer/ClippedDrawer'
import MobileDrawer from './MobileDrawer/MobileDrawer'

import SeriesList from '../MenuLists/Series/SeriesList'
import BooksList from '../MenuLists/Books/BooksList'
import SectionsList from '../MenuLists/Sections/SectionsList'

import useResponsiveDrawerStyles from './ResponsiveDrawer.styles'

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