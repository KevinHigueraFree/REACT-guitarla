import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'// react dom la importacion de createRoot es lo que permite la integraciond e react con html
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
