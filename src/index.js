import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Base from './pages/base';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Base />, document.getElementById('root'));
registerServiceWorker();
