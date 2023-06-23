import React from 'react'
import ReactDOM from 'react-dom/client'
import DefaultNavbar from './components/DefaultNavbar'
import SlambookForm from './components/SlambookForm'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SlambookForm />
  </React.StrictMode>,
)
