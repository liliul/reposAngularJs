import ThemeProvider from "./contextApi/theme/Theme"
import Container from "./components/container"
import { Welcome } from "./components/welcome"

function App() {
  return (
    <ThemeProvider>
      <Container>
        <Welcome />
      </Container>
    </ThemeProvider>
  )
}

export default App
