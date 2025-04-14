import { Button } from '@src/components/ui/button'
import { appShowList } from '@src/lib/constants'
import { useEffect, useReducer, useState } from 'react'
import { Link, useLocation } from 'react-router'

const Navbar = () => {
  const location = useLocation()
  const [isSticky, setIsSticky] = useState(false)

  const [showNavBar, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'hide_navbar': {
        return false
      }
      case 'show_navbar': {
        return true
      }
      default:
        return state
    }
  }, false)

  useEffect(() => {
    if (location.pathname === '/') {
      dispatch({
        type: 'hide_navbar',
      })
    }
    if (location.pathname !== '/') {
      dispatch({
        type: 'show_navbar',
      })
    }
  }, [location.pathname])

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <>
      {showNavBar === true ? (
        <nav
          className={`px-8 py-8 w-full h-auto z-30 flex justify-between items-center transition-all duration-500 ease-in-out ${
            isSticky
              ? 'fixed top-0 bg-black/30 backdrop-blur-md shadow-lg opacity-100'
              : 'absolute top-0 bg-transparent opacity-90'
          }`}
        >
          <div className="text-white h-full">Mauricio's Hub</div>
          <div>
            <ul className="flex flex-1 flex-row gap-2">
              <li>
                <Button asChild variant={'outline'}>
                  <Link to="/home">Inicio</Link>
                </Button>
              </li>
              {appShowList.map((appShowList, index) => {
                return (
                  <li key={appShowList.appName + index}>
                    <Button asChild variant="outline">
                      <Link to={`${appShowList.internalUrl}`}> {appShowList.appName} </Link>
                    </Button>
                  </li>
                )
              })}
            </ul>
          </div>
        </nav>
      ) : null}
    </>
  )
}

export default Navbar
