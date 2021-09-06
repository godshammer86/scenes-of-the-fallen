import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase';

import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'

import useSearchAppBarStyles from './SearchAppBar.styles'

const SearchAppBar = ({ menuClick }) => {
  const classes = useSearchAppBarStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={menuClick}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            className={classes.title}
            component="h1"
            variant="h5"
            noWrap
          >
            Scenes of the Fallen
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search..."
              inputProps={{ 'aria-label': 'search'}}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default SearchAppBar