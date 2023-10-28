import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Card from './component/Card';
import Repos from './component/Repos';
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
