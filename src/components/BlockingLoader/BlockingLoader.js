import React from 'react'

import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'


import useBlockingLoaderStyles from './BlockingLoader.styles'

const BlockingLoader = ({ backdropOpen }) => {
  const classes = useBlockingLoaderStyles()

  return (
    <Backdrop className={classes.backdrop} open={backdropOpen}>
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}

export default BlockingLoader