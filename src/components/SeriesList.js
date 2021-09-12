import React from 'react'
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'
import Button from '@material-ui/core/Button'
import Collapse from '@material-ui/core/Collapse'
import Divider from '@material-ui/core/Divider'
import { makeStyles } from '@material-ui/core/styles';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { FirestoreContext } from './Contexts/FirestoreProvider'

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


const SeriesList = ({ children }) => {
  const classes = useSeriesListStyles()

  // State
  const { series } = React.useContext(FirestoreContext)
  const [selectedSeriesId, setSelectedSeriesId] = React.useState(0)

  // Event handlers
  const handleToggleSeries = (id) => {
    if (selectedSeriesId === id) {
      setSelectedSeriesId(0)
    } else {
      setSelectedSeriesId(id)
    }
  }
  
  const seriesItems = series.data.map((seriesItem) => {
    return (
      <ListSubheader 
        key={seriesItem.id} 
        disableGutters 
        disableSticky
        classes={{
          root: classes.listSubheader
        }}
      >
        <Button  
          variant="text"
          onClick={() => {
            handleToggleSeries(seriesItem.id)
          }}
          classes={{
            root: classes.button,
            text: classes.buttonLabel
          }}
        >
          {seriesItem.name}
          {seriesItem.id === selectedSeriesId ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </Button>
        
        <Divider />
        
        <Collapse in={seriesItem.id === selectedSeriesId}>
          {
            // Pass the name of the series to each BooksList item
            // Used there to only render books that are part of this series
            React.Children.map(children, (child) => {
              return React.cloneElement(child, {
                series: seriesItem,
                selectedSeriesId: selectedSeriesId
              })
            })
          }
        </Collapse>
      </ListSubheader>
    )
  })

  return (
   <List>
     {seriesItems}
   </List>
  )
}

export default SeriesList