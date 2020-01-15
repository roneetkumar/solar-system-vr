import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import 'aframe';
// import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';

ReactDOM.render(<App />, document.querySelector('#sceneContainer'));
