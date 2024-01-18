import React from 'react'
import ReactDOM from 'react-dom/client'
import { createGlobalStyle } from 'styled-components'
import App from './App.jsx'

// eslint-disable-next-line react-refresh/only-export-components
const GlobalStyle = createGlobalStyle`
  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-weight: 400;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
  }

  * {
    margin: 0;
    box-sizing: border-box;
  }

  body{
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
  }

  li{
    list-style: none;
  }
`

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>,
)
