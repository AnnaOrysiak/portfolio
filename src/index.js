import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import Portfolio from './layout/Portfolio';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Portfolio />, document.getElementById('root'));

serviceWorker.unregister();
