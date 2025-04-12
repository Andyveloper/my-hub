import { createBrowserRouter } from 'react-router'
import Home from '@src/pages/Home'
import LandingPage from '@src/pages/Landing'
import SteamPage from '@src/pages/SteamPage'

const routes = [
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/steam',
    element: <SteamPage />,
  },
]

const router = createBrowserRouter(routes)

export default router
