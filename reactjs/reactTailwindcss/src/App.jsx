import {BrowserRouter, Routes, Route} from 'react-router'
import ThemeProvider from "./contextApi/theme/Theme"
import Home from './page/Home'
import Login from './page/Login'

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
