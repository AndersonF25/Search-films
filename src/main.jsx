import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App.jsx'
import Home from './pages/Home/Home.jsx'
import Movies from './pages/Movies/Movies.jsx'
import Search from './pages/Search/Search.jsx'

import './global.css'
import Teste from './pages/Teste.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path='/movie/:id' element={<Movies />} />
          <Route path='search' element={<Search />} />
          <Route path='teste' element={<Teste />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
