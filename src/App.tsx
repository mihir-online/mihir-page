import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from '@components/layout/Navigation'
import Settings from '@components/layout/Settings'
import Header from '@components/layout/Header'
import { ThemeProvider } from '@context/ThemeContext'
import { ColorModeProvider } from '@context/ColorModeContext'
import { routes } from '@constants/routes'
import '@styles/global/main.scss'

const App = () => {
  return (
    <ColorModeProvider>
      <ThemeProvider>
        <Router>
          <div className="app">
            <Header />
            <Navigation />
            <Settings />
            <main className="main-content">
              <Routes>
                {routes.map(({ path, element: Element }) => (
                  <Route key={path} path={path} element={<Element />} />
                ))}
              </Routes>
            </main>
          </div>
        </Router>
      </ThemeProvider>
    </ColorModeProvider>
  )
}

export default App 