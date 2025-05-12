import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; //aca meti router
import App from './App.jsx';
import './index.css';
import { ThemeProvider } from './components/ThemeContext.jsx';

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </ThemeProvider>
);
