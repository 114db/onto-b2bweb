import { useState } from 'react'
import { Container, Typography, Button, Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import './App.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ my: 4, textAlign: 'center' }}>
          <Typography variant="h3" component="h1" gutterBottom>
            안녕하세요, Vite + React!
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
            <Button 
              variant="contained" 
              onClick={() => setCount((count) => count + 1)}
            >
              카운트: {count}
            </Button>
            <Typography>
              이 페이지를 편집하려면 <code>src/App.jsx</code> 파일을 수정하세요
            </Typography>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default App 