import Home from '@pages/Home'
import About from '@pages/About'
import Projects from '@pages/Projects'
import Blog from '@pages/Blog'

export interface RouteConfig {
  path: string
  element: React.ComponentType
  label: string
}

export const routes: RouteConfig[] = [
  {
    path: '/',
    element: Home,
    label: 'Home'
  },
  {
    path: '/about',
    element: About,
    label: 'About'
  },
  {
    path: '/projects',
    element: Projects,
    label: 'Projects'
  },
  {
    path: '/blog',
    element: Blog,
    label: 'Blog'
  }
] 