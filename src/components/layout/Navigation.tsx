
import { NavLink } from 'react-router-dom'
import { useTheme } from '@context/ThemeContext'
import { routes } from '@constants/routes'

const Navigation = () => {
  const { theme } = useTheme()

  return (
    <nav className={`main-nav main-nav--${theme}`}>
      <ul>
        {routes.map(({ path, label }) => (
          <li key={path}>
            <NavLink to={path} end={path === '/'}>
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation 