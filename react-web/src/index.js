import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

console.log(process.env)
console.log('cccc', process.env.REACT_APP_API_URL)

ReactDOM.render(<App />, document.getElementById('root'));
