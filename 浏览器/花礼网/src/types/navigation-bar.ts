import { Link, ImageTextLink } from './common'

type NavListType = Link

interface GroupDataType {
  readonly title: Link
  readonly links: Link[]
  additional: {
    title: string
    list: ImageTextLink[]
  }[]
  cities: {
    title: string
    list: Link[]
  }
}

export type {
  NavListType,
  GroupDataType
}