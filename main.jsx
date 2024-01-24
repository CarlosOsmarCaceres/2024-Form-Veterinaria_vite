import React from 'react'
import ReactDOM from 'react-dom/client' // es la version web de react y la version movil es react native
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <App />
  //</React.StrictMode>,
)
