import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faTv,
  faLayerGroup,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';

library.add(faTv, faLayerGroup, faCheckCircle);

ReactDOM.render(<App />, document.getElementById('root'));
