import Navbar from '@src/pages/pageComponents/general/Navbar'
import Footer from '@src/pages/pageComponents/general/Footer'
import { Outlet } from 'react-router'

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />,
      <Footer />
    </>
  )
}

export default RootLayout
