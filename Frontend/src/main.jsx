import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Analayser  from './components/ResumAnalyser/Analayser'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Analayser />
  </StrictMode>,
)
