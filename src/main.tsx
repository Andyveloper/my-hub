import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import './index.css'
import router from './routes/Routes'
import Footer from './pages/pageComponents/general/Footer'
import Navbar from './pages/pageComponents/general/Navbar'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <RouterProvider router={router} />
    <Footer />
  </StrictMode>
)
