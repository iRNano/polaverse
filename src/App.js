import { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import AppRoutes from './config/Routes';
import Header from './layouts/Header';
function App() {
  return (
    <div className='App'>
    <Router>
    <Header />
      <AppRoutes />
    </Router>
    {/* <Animes /> */}
    </div>
    // </Fragment>
    // <div className="App">
      
    // </div>
  );
}

export default App;
