import { createBrowserRouter } from 'react-router'
import Home from '@src/pages/Home'
import LandingPage from '@src/pages/Landing'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/home',
    element: <Home />,
  },
])

export default router
