import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const DATA = JSON.parse(localStorage.getItem('tasks')) || [];
console.log(DATA);

ReactDOM.render(
    <App tasks={DATA}/>,
  document.getElementById('root')
);

