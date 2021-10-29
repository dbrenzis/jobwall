import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom"
import App from './App';
import {basedir} from './data/config'

ReactDOM.render(<Router basename={basedir}><App/></Router>, document.getElementById('root'));

