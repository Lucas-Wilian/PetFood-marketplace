import React from 'react';
import ReactDOM from 'react-dom/client';
import { PetShoop } from './pages/PetShoop/PetShoop';
import './styles/global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PetShoop />
  </React.StrictMode>
);
