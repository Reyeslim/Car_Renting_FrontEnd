import theme from './styles/theme'
import Signup from './views/Auth/Signup'
import { ThemeProvider } from 'styled-components'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Signup />
      </ThemeProvider>
    </div>
  )
}

export default App
