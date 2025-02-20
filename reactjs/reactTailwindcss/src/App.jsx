import {BrowserRouter, Routes, Route} from 'react-router'
import ThemeProvider from "./contextApi/theme/Theme"
import Home from './page/Home'
import Login from './page/Login'
import Paginacao from './components/paginacao'

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/pagina' element={<Paginacao />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
