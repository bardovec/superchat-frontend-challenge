import React from 'react';
import './css/App.css';

import { BrowserRouter } from 'react-router-dom';

import AppRouter from './AppRouter';

const App = () => (
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
);

export default App;
