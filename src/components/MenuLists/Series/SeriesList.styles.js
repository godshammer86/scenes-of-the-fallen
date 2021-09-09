import { makeStyles } from '@material-ui/core/styles';

const useSeriesListStyles = makeStyles((theme) => ({
  listSubheader: {
    display: 'block',
    padding: 0,
    backgroundColor: theme.palette.common.white
  },
  button: {
    width: '100%',
    letterSpacing: 0,
    borderRadius: 0,
    justifyContent: 'flex-start',
    fontWeight: theme.typography.fontWeightBold
  },
  buttonLabel: {
    padding: '14px 8px',
    justifyContent: 'space-between',
  },
}))

export default useSeriesListStyles