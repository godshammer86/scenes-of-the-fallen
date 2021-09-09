import { createTheme } from '@material-ui/core/styles'
import { blueGrey } from '@material-ui/core/colors'

const theme = createTheme({
  palette: {
    background: {
      accent: blueGrey[50]
    }
  }
})

export default theme