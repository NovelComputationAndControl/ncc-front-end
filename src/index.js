import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import IndexPage from './Pages/Index/Index.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<IndexPage />, document.getElementById('root'));
registerServiceWorker();
