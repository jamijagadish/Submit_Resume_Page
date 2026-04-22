import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// React app ko index.html ke root element ke andar render kiya jata hai.
createRoot(document.getElementById('root')).render(
  // StrictMode development time warnings aur best-practice checks me help karta hai.
  <StrictMode>
    <App />
  </StrictMode>,
)
