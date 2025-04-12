import { Button } from '@src/components/ui/button'
import { appShowList } from '@src/lib/constants'
import { useEffect, useState } from 'react'

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 5)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
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
          {appShowList.map((appShowList, index) => {
            return (
              <li key={appShowList.appName + index}>
                <Button asChild variant="outline">
                  <a href={`${appShowList.internalUrl}`}> {appShowList.appName} </a>
                </Button>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
