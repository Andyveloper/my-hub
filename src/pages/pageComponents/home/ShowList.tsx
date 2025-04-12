import { Button } from '@src/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@src/components/ui/card'
import { ShowListProps } from '@src/types/TYPES'
import { Link } from 'react-router'

const ShowList = ({ showList, title, description }: ShowListProps) => {
  return (
    <section className="py-10">
      <div className="z-20 flex flex-col container mx-auto items-center justify-center">
        <h1 className="text-6xl md:text-6xl font-bold text-black mb-6 p-6 text-center">{title}</h1>
        <p className="text-xl md:text-xl text-black xs:max-w-2xl p-6 text-center">{description}</p>
      </div>
      <div>
        <ul className="flex flex-wrap justify-around  gap-6 container mx-auto items-stretch">
          {showList.map((showList, index) => {
            return (
              <li key={showList.appName + index} className="w-full md:w-1/3 lg:w-1/4 flex mx-4">
                <Card className="flex flex-col justify-between flex-1">
                  <CardHeader className="text-center text-2xl">
                    <h2 className="font-bold bg-gradient-to-r bg-clip-text text-transparent from-purple-700 via-blue-500 to-cyan-400">
                      {showList.appName}
                    </h2>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-1 items-center justify-center">
                    <img
                      src={showList.img}
                      alt={showList.appName}
                      width={128}
                      height={128}
                      className="py-3 "
                    />
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                      {showList.appDescription}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant={'outline'} asChild title="Ir al link externo">
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        to={`${showList.externalUrl}`}
                      >
                        Ir al link externo
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default ShowList
