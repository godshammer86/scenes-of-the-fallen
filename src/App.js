import CssBaseline from '@material-ui/core/CssBaseline';
import ResponsiveDrawer from './components/ResponsiveDrawer';
import FirestoreProvider from './components/Contexts/FirestoreProvider';

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
