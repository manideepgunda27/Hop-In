import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom';
import './index.css'
import { AuthProvider } from './context/authContext.jsx';
import App from './App.jsx'
createRoot(document.getElementById('root')).render(
  
  <AuthProvider>
    <App />
  </AuthProvider>,
  
)
