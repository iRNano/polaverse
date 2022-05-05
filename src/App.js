import { Fragment } from 'react';
import './App.css';
import Animes from './components/Animes';
import Header from './layouts/Header';
function App() {
  return (
    <Fragment>
    <Header />
    <Animes />
    </Fragment>
    // <div className="App">
      
    // </div>
  );
}

export default App;
