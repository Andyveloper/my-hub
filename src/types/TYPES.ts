// #region Home
export type VideoHeaderProps = {
  title: string
  text: string
  video: string
}
export type ImageHeaderProps = {
  title: string
  text: string
  image: string
}

export type ShowList = {
  appName: string
  appDescription: string
  externalUrl: string
  img: string
}
export type ShowListProps = {
  showList: ShowList[]
  title: string
  description: string
}

export type AboutMeProps = {
  title: string
  subTitle: string
  description: string
}
