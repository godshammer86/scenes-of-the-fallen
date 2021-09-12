import React from 'react'
import Hidden from '@material-ui/core/Hidden'
import  Drawer from '@material-ui/core/Drawer'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 300;

const useClippedDrawerStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.background.accent
  },
  drawerContainer: {
    height: '100%',
    overflow: 'auto',
  },
}))

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