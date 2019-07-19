import React from 'react';
import logo from './logo.svg';
import './App.css';

import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allreducers from './reducers';
import Constapp from './components/Constapp';


const store = createStore(allreducers);


function App() {
  return (
    ReactDOM.render(

      <Provider store={store}>
        <Constapp />
      </Provider>
    
    , document.getElementById('root'))


    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    */
  );
}

export default App;
