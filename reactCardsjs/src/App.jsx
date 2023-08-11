// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import Card from './component/Card';
import Repos from './component/Repos';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Card />} />
            <Route path='/repos' element={<Repos />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
