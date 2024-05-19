import { Image, Link } from './common'

interface ExtendedLink extends Link {
  readonly type: string
}

interface Data {
  readonly services: Link[]
  readonly information: Link[]
  readonly cities: Link[]
  readonly contact: ExtendedLink[]
  readonly qrcodes: Image[]
}

export type {
  ExtendedLink,
  Data
}
