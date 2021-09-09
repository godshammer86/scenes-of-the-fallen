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

export default useMobileDrawerStyles