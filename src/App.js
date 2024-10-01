import React, {useState} from 'react'
import ThemeProvider from './components/useContext/ThemeProvider'
import Toolbar from './components/useContext/Toolbar'

const App = () => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }
  return (
    <ThemeProvider>
      <div>
        <h1>Dicky Fernando Sitepu Project</h1>
        <p>Ini adalah paragraf</p>
        <button onClick={toggleTheme} style={{backgroundColor: 'red'}}>
                Toggle Theme to {theme === 'light' ? 'dark' : 'light'}
            </button>
        <button onClick={toggleTheme} style={{backgroundColor: 'red'}}>
                Toggle Theme to {theme === 'light' ? 'dark' : 'light'}
            </button>
        <button onClick={toggleTheme} style={{backgroundColor: 'red'}}>
                Toggle Theme to {theme === 'light' ? 'dark' : 'light'}
            </button>
        <Toolbar />
      </div>
    </ThemeProvider>
  )
}

export default App