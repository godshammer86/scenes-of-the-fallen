import { FirestoreProvider } from './components/dataProviders/FirestoreProvider';
import SearchAppBar from './components/SearchAppBar/SearchAppBar'
import VerticalMenu from './components/VerticalMenu/VerticalMenu';

import './App.css';

const App = () => {

  return (
    <div className="App">
      <FirestoreProvider>
        <SearchAppBar/>
        <VerticalMenu/>
      </FirestoreProvider>
    </div>
    
  );
}

export default App;
