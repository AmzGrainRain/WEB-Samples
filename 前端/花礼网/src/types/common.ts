interface Link {
  readonly text: string
  readonly url: string
}

interface Image {
  readonly image: string
  readonly alt: string
}

interface ImageLink extends Image {
  readonly url: string
}

interface ImageTextLink extends Link, Image {}

interface User {
  readonly name: string
  readonly avator: string
}

export type {
  Link,
  Image,
  ImageLink,
  ImageTextLink,
  User
}
