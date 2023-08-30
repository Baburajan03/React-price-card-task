import React from 'react';
import ReactDOM from 'react-dom/client';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import App from './App';

library.add(fas);

ReactDOM.createRoot(document.getElementById('root')).render(<App />)

