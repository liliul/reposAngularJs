import ThemeProvider from "./contextApi/theme/Theme"
import Container from "./components/container"
import { Welcome } from "./components/welcome"
import { ThemeMode } from "./components/infosContxtApi/themeMode"

function App() {
  return (
    <ThemeProvider>
      <Container>
        <Welcome />
        
        <ThemeMode />
      </Container>
    </ThemeProvider>
  )
}

export default App
