import VALORANT_replay from '@src/assets/videos/VALORANT_replay.mp4'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'

const LandingPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const redirectToHome = setTimeout(() => {
      navigate('/home')
    }, 5000)

    return () => {
      clearTimeout(redirectToHome)
    }
  }, [navigate])

  return (
    <main>
      <section className="relative w-screen h-screen bg-[#000000] overflow-hidden">
        <video
          src={VALORANT_replay}
          muted
          autoPlay
          loop
          playsInline
          className="absolute z-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#000000] opacity-90 z-10 bg-blend-soft-light" />
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-white text-6xl mb-6 font-bold">Welcome to my HUB</h1>
          <p className="text-white text-2xl">Wait for a sec to get redirected</p>
        </div>
      </section>
    </main>
  )
}

export default LandingPage
