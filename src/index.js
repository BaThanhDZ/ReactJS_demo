import { StrictMode } from 'react';
import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';

// ReactDOM.render(
// 	<App />,
// 	document.getElementById('main-content')
// );
const container = document.getElementById('content');
const root = createRoot(container);
root.render(
	<StrictMode>
    	<App />
  	</StrictMode>
);
