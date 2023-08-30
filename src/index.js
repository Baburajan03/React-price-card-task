import React from 'react';
import ReactDOM from 'react-dom/client';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS
import { Button } from 'react-bootstrap';
import App from './App';

library.add(fas);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

