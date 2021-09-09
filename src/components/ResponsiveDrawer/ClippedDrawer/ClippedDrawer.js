import React from 'react'

import Hidden from '@material-ui/core/Hidden'
import  Drawer from '@material-ui/core/Drawer'
import Toolbar from '@material-ui/core/Toolbar'

import useClippedDrawerStyles from './ClippedDrawer.styles'

const ClippedDrawer = ({ children }) => {
  const classes = useClippedDrawerStyles()

  return (
   <Hidden xsDown>
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <Toolbar className={classes.toolbar} />
      <div className={classes.drawerContainer}>
        
        { children }
      </div>
    </Drawer>
   </Hidden>
  )

}

export default ClippedDrawer