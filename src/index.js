import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCreditCard,
  faFileInvoiceDollar,
  faMoneyBillWave,
} from '@fortawesome/free-solid-svg-icons';

library.add(faCreditCard, faFileInvoiceDollar, faMoneyBillWave);

ReactDOM.render(<App />, document.getElementById('root'));
