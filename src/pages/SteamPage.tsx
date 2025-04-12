import ImageHeader from './pageComponents/general/ImageHeader'
import SteamImage from '@src/assets/images/steam-concurrent-users-record-29-million.avif'
import { steamHeaderText, steamHeaderTitle } from '@src/lib/constants'

const SteamPage = () => {
  return (
    <section>
      <ImageHeader image={SteamImage} text={steamHeaderText} title={steamHeaderTitle} />
    </section>
  )
}
export default SteamPage
