import React from 'react'
import Drawer from '@material-ui/core/Drawer'

const VerticalMenu = ({ menuOpen }) => {
  return (
    <Drawer anchor="left" variant="persistent" open={menuOpen}>
      <nav>
      </nav>
    </Drawer>
  )
}

export default VerticalMenu