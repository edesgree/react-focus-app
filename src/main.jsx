import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './assets/styles.scss';
import { makeServer } from './server.js';

if (process.env.NODE_ENV === 'development') {
    makeServer({ environment: 'development' }); // Initialize Mirage server in development environment
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
