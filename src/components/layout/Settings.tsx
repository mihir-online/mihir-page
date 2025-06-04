import React, { useState, useCallback } from 'react'
import { useFloating, offset, flip, shift, autoUpdate } from '@floating-ui/react-dom'
import { useTheme } from '@context/ThemeContext'
import { useColorMode } from '@context/ColorModeContext'

const Settings: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const { colorMode, toggleColorMode } = useColorMode()

  const { refs, floatingStyles } = useFloating({
    open: isOpen,
    placement: 'bottom-end',
    middleware: [
      offset(8), // 8px gap between button and popup
      flip(), // flip to top if bottom doesn't fit
      shift() // shift along the main axis if needed
    ],
    whileElementsMounted: autoUpdate
  })

  const handleToggle = useCallback(() => {
    setIsOpen(prev => !prev)
  }, [])

  const handleClose = useCallback(() => {
    setIsOpen(false)
  }, [])

  const handleThemeToggle = useCallback(() => {
    if (theme !== 'notebook') {
      toggleTheme()
    }
  }, [theme, toggleTheme])

  const handleModernToggle = useCallback(() => {
    if (theme !== 'modern') {
      toggleTheme()
    }
  }, [theme, toggleTheme])

  const handleLightMode = useCallback(() => {
    if (colorMode !== 'light') {
      toggleColorMode()
    }
  }, [colorMode, toggleColorMode])

  const handleDarkMode = useCallback(() => {
    if (colorMode !== 'dark') {
      toggleColorMode()
    }
  }, [colorMode, toggleColorMode])

  return (
    <div className="settings">
      <button
        ref={refs.setReference}
        className="settings-trigger"
        onClick={handleToggle}
        aria-label="Settings"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1Z" />
        </svg>
      </button>

      {isOpen && (
        <div
          ref={refs.setFloating}
          className="settings-popup"
          style={floatingStyles}
        >
          <div className="settings-header">
            <h3>Settings</h3>
            <button
              className="settings-close"
              onClick={handleClose}
              aria-label="Close settings"
            >
              ×
            </button>
          </div>
          <div className="settings-content">
            <div className="settings-group">
              <label>Theme</label>
              <div className="settings-toggle">
                <button
                  className={theme === 'notebook' ? 'active' : ''}
                  onClick={handleThemeToggle}
                >
                  Notebook
                </button>
                <button
                  className={theme === 'modern' ? 'active' : ''}
                  onClick={handleModernToggle}
                >
                  Modern
                </button>
              </div>
            </div>
            <div className="settings-group">
              <label>Color Mode</label>
              <div className="settings-toggle">
                <button
                  className={colorMode === 'light' ? 'active' : ''}
                  onClick={handleLightMode}
                >
                  Light
                </button>
                <button
                  className={colorMode === 'dark' ? 'active' : ''}
                  onClick={handleDarkMode}
                >
                  Dark
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Settings 