import { makeStyles } from '@material-ui/core/styles';

const useBlockingLoaderStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}))

export default useBlockingLoaderStyles