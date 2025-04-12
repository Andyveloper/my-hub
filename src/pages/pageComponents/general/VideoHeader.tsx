import { type VideoHeaderProps } from '@src/types/TYPES'
import SeparatorImage from '@src/assets/images/Separator.gif'
import { useEffect, useState } from 'react'

const VideoHeader = ({ video, title, text }: VideoHeaderProps) => {
  const [displayedTitle, setDisplayedTitle] = useState('')
  const [displayedText, setDisplayedText] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    setDisplayedTitle('')
    let index = 0

    const interval = setInterval(() => {
      if (index < title.length) {
        setDisplayedTitle(title.substring(0, index + 1))
        index++
      } else {
        clearInterval(interval)
      }
    }, 100)

    return () => clearInterval(interval)
  }, [title])

  useEffect(() => {
    let index = 0
    const cursorInterval = setInterval(() => {
      setDisplayedText(text.substring(0, index + 1))
      index++
    }, 20)

    return () => clearInterval(cursorInterval)
  }, [text])

  useEffect(() => {
    const cursorTimeout = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)
    return () => {
      clearTimeout(cursorTimeout)
    }
  }, [])

  return (
    <header className="flex w-full h-screen justify-center items-center relative overflow-hidden mb-10">
      <video
        src={video}
        autoPlay
        muted
        loop
        playsInline
        className="absolute z-0 object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-[#000000] opacity-97 z-10" />
      <div className="z-20 flex flex-col container mx-auto items-center justify-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 p-6 text-center bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 text-transparent bg-clip-text">
          {displayedTitle}
          <span
            className={`${showCursor ? 'opacity-100' : 'opacity-0'} ml-2.5 border-r-2 border-white h-12 md:h-16 inline-block transition-opacity duration-75`}
          ></span>
        </h1>
        <img color="white" src={SeparatorImage} height={512} width={512} />
        <p className="text-xl md:text-2xl text-white max-w-7xl p-6 text-center">
          {displayedText}
          <span
            className={`${showCursor ? 'opacity-100' : 'opacity-0'} ml-1.5 border-r-2 border-white h-4 md:h-5 inline-block transition-opacity duration-75`}
          ></span>
        </p>
        <div className="flex justify-center items-center text-white text-4xl">☆</div>
      </div>
    </header>
  )
}

export default VideoHeader
