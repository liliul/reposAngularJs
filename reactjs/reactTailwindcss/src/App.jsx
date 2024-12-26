import {BrowserRouter, Routes, Route} from 'react-router'
import ThemeProvider from "./contextApi/theme/Theme"
import Home from './page/Home'


function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
