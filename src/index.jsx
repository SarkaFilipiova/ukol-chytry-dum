import React from 'react';
import { render } from 'react-dom';
import './style.css';
import Header from './components/Header/index.jsx';
import smartHomeData from './smartHomeData';
import Dashboard from './components/Dashboard/index.jsx';

const App = () => {
  return(
    <div className='container'>
      <Header title="Chytrý dům"/>
      <Dashboard data={smartHomeData}/>
    </div>
  )
};

render(<App />, document.querySelector('#app'));