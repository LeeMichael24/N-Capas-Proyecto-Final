import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
/* import Login from './screens/login_screen/login.jsx' */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      {/* <Login/> */}
    </BrowserRouter>
  </React.StrictMode>,
)
