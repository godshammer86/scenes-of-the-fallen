import FirestoreProvider from './components/Contexts/FirestoreProvider';

import CssBaseline from '@material-ui/core/CssBaseline';
import ResponsiveDrawer from './components/ResponsiveDrawer/ResponsiveDrawer';

import './App.css';

const App = () => {

  return (
    <FirestoreProvider>
      <div className="App">
        <CssBaseline />
        
        <ResponsiveDrawer />
      </div>
    </FirestoreProvider>
    
  );
}

export default App;
