import { Link, ImageTextLink } from './common'

type Navigation = Link

interface ExtendImageTextLink extends ImageTextLink {
  readonly imageWidth: string
  readonly imageHeight: string
}

interface Category {
  readonly title: Link
  readonly links: Link[]
  additional: {
    title: string
    list: ExtendImageTextLink[]
  }[]
  cities: {
    title: string
    list: Link[]
  }
}

export type {
  Navigation,
  Category
}
