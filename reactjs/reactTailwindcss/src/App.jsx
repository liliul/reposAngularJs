import ThemeProvider from "./contextApi/theme/Theme"
import Container from "./components/container"

function App() {
  return (
    <ThemeProvider>
      <Container>
        <h1>Tailwindcss</h1>
      </Container>
    </ThemeProvider>
  )
}

export default App
