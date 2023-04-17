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

export type {
  Link,
  Image,
  ImageLink,
  ImageTextLink
}
