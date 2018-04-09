import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import registerServiceWorker from './registerServiceWorker';
import App from './App';
import store from "./store";

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root')
);

registerServiceWorker();
