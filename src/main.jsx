// Inject Tailwind CSS via CDN at runtime
const script = document.createElement('script');
script.src = 'https://cdn.tailwindcss.com';
script.onload = () => {
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          semiqolon: '#0a1736', // Your rich navy blue
          gold: '#ffd700',
        },
      },
    }
  };
};
document.head.appendChild(script);

// Now import your actual React code
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);


