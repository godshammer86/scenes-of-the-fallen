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

export default useClippedDrawerStyles