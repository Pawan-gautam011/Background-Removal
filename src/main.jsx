import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import RemoveBackground from './RemoveBackground.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <App />
    <RemoveBackground/>


  </StrictMode>,
)
