import React from 'react'

import Hidden from '@material-ui/core/Hidden'
import  Drawer from '@material-ui/core/Drawer'
import { useTheme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 300

const useMobileDrawerStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
}))

const MobileDrawer = ({ mobileOpen, handleDrawerToggle, children }) => {
  const classes = useMobileDrawerStyles()
  const theme = useTheme()

  const container = window !== undefined ? () => window.document.body : undefined;

  return (
    <Hidden smUp implementation="css">
      <Drawer
        container={container}
        variant="temporary"
        anchor={theme.direction === 'rtl' ? 'right' : 'left' }
        open={mobileOpen}
        onClose={handleDrawerToggle}
        classes={{
          paper: classes.drawerPaper,
        }}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
       <div className={classes.drawerContainer}>
         {children}
       </div>
      </Drawer>
    </Hidden>
  )
}

export default MobileDrawer