import React from 'react'
import ThemeProvider from './components/useContext/ThemeProvider'
import Toolbar from './components/useContext/Toolbar'

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <h1>Dicky Fernando Sitepu Project</h1>
        <Toolbar />
      </div>
    </ThemeProvider>
  )
}

export default App