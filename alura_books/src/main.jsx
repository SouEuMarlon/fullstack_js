import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import Header from './components/Header/index.jsx'
import Categorias from './rotas/Categorias.jsx'
import Favoritos from './rotas/Favoritos.jsx'
import Home from './rotas/Home.jsx'
import MinhaEstante from './rotas/MinhaEstante.jsx'

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

  /* body{
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
  } */

  li{
    list-style: none;
  }
`

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/favoritos" element={<Favoritos/>} />
        <Route path="/categorias" element={<Categorias/>} />
        <Route path="/minha_estante" element={<MinhaEstante/>} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
