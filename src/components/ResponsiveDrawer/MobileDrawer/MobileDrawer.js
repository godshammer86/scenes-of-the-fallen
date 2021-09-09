import React from 'react'

import Hidden from '@material-ui/core/Hidden'
import  Drawer from '@material-ui/core/Drawer'
import { useTheme } from '@material-ui/core'

import useMobileDrawerStyles from './MobileDrawer.styles'

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