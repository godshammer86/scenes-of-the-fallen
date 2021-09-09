import { makeStyles } from '@material-ui/core/styles';

const useBooksListStyles = makeStyles((theme) => ({
  listSubheader: {
    display: 'block',
    padding: '0 16px',
    backgroundColor: theme.palette.common.white
  },
  button: {
    width: '100%',
    letterSpacing: 0,
    borderRadius: 0,
    justifyContent: 'flex-start',
    // fontWeight: theme.typography.fontWeightBold
    // textTransform: 'capitalize',
  },
  buttonText: {
    padding: '10px 8px',
  },
  buttonLabel: {
    justifyContent: 'space-between',
  },
}))

export default useBooksListStyles