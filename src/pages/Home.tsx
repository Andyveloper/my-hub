import GUILTY_GEAR_replay_v2 from '@src/assets/videos/GUILTY_GEAR_replay_v2.mp4'
import VideoHeader from '@src/pages/pageComponents/general/VideoHeader'
import ShowList from '@src/pages/pageComponents/home/ShowList'
import AboutMe from '@src/pages/pageComponents/home/AboutMe'

// Import de textos
import {
  appShowList,
  headerText,
  headerTitle,
  showListDescription,
  showListTitle,
  aboutMeDescription,
  aboutMeSubtitle,
  aboutMeTitle,
} from '@src/lib/constants'

const Home = () => {
  return (
    <main>
      <VideoHeader video={GUILTY_GEAR_replay_v2} title={headerTitle} text={headerText} />
      <AboutMe title={aboutMeTitle} subTitle={aboutMeSubtitle} description={aboutMeDescription} />
      <ShowList showList={appShowList} title={showListTitle} description={showListDescription} />
    </main>
  )
}

export default Home
