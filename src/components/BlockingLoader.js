import React from 'react'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles';

const useBlockingLoaderStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}))

const BlockingLoader = ({ backdropOpen }) => {
  const classes = useBlockingLoaderStyles()

  return (
    <Backdrop className={classes.backdrop} open={backdropOpen}>
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}

export default BlockingLoader