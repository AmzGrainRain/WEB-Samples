import { Link, User } from '../common'

interface Comment {
  readonly user: User
  readonly content: string
  readonly image: string
  readonly address: string
  readonly datetime: string
  readonly url: string
}

interface DataType {
  readonly title: Link
  readonly description: string
  readonly more: Link
  readonly list: Comment[]
}

export type {
  Comment,
  DataType
}