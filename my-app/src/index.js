import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import StaffHeader from './StaffHeader'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<StaffHeader />, document.getElementById('root'));
registerServiceWorker();
