// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import Card from './component/Card';
import Repos from './component/Repos';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import About from './component/pages/About';
import UseArray from './component/testUseState/stateArray';

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Card />} />
            <Route path='/repos' element={<Repos />} />
            <Route path='/about' element={<About />} />
            <Route path='/useArray' element={<UseArray />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
