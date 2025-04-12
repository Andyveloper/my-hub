import { AboutMeProps } from '@src/types/TYPES'
import BlackSeparator from '@src/assets/images/divider-7702012_1280.png'

const AboutMe = ({ title, subTitle, description }: AboutMeProps) => {
  const paragraphs = description.split('\n')
  return (
    <section>
      <div className="flex justify-center items-center">
        <img src={BlackSeparator} alt="Separator" width={512} height={512} />
      </div>
      <div className="container mx-auto flex flex-row items-center justify-center gap-10">
        <div className="flex flex-col max-w-xl">
          <h1 className="text-6xl md:text-6xl mb-6 p-6 text-center font-bold bg-gradient-to-r bg-clip-text text-transparent from-purple-700 via-blue-500 to-cyan-400">
            {title}
          </h1>
          <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            {subTitle}
          </h2>
        </div>
        <div className="max-w-2xl">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="leading-7 [&:not(:first-child)]:mt-6 mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img src={BlackSeparator} alt="Separator" width={512} height={512} />
      </div>
    </section>
  )
}

export default AboutMe
