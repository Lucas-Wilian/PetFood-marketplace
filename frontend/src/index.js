import React from 'react';
import ReactDOM from 'react-dom/client';
import { Cadastro } from './pages/Cadastro/Cadastro';
import './styles/global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Cadastro />
  </React.StrictMode>
);
