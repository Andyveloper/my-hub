import { createBrowserRouter } from 'react-router'
import Home from '@src/pages/Home'
import LandingPage from '@src/pages/Landing'
import SteamPage from '@src/pages/SteamPage'
import RootLayout from './RootLayout'

const routes = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
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
    ],
  },
]

const router = createBrowserRouter(routes)

export default router
