import { BrowserRouter } from 'react-router-dom';

import { createRoot } from 'react-dom/client'
import './assets/styles/main.css'

import App from './App.tsx'
import './assets/styles/response.css'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename='/react-portfolio-template'>
    <App />
  </BrowserRouter >,
)

