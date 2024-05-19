import { ImageTextLink, Link } from '../common'

interface ExtendImageTextLink extends ImageTextLink {
  readonly imageWidth: string
  readonly imageHeight: string
}

interface Product {
  image: string
  title: string
  tag: string
  price: string
  selled: string
  url: string
}

interface DataType {
  readonly title: Link
  readonly description: string
  readonly more: Link
  readonly categorys: Link[]
  readonly brand: ExtendImageTextLink[]
  readonly product: Product[]
}

export type {
  DataType
}