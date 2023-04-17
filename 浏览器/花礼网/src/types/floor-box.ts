import { Link, ImageTextLink } from './common'

interface ProductType {
  image: string
  title: string
  tag: string
  price: string
  selled: string
}

interface DataType{
  title: Link
  description: string
  more: Link
  banner: ImageTextLink
  list: ProductType[]
}

export type {
  ProductType,
  DataType
}
