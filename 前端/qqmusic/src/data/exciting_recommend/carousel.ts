type ImageUrlT = {
  src: string
  href: string
}

const CarouselData: [ImageUrlT, ImageUrlT][] = [
  [
    { src: '0.jpg', href: '#' },
    { src: '1.webp', href: '#' }
  ],
  [
    { src: '2.webp', href: '#' },
    { src: '3.png', href: '#' }
  ],
  [
    { src: '4.webp', href: '#' },
    { src: '5.jpg', href: '#' }
  ],
  [
    { src: '6.png', href: '#' },
    { src: '7.jpg', href: '#' }
  ]
]

export { CarouselData }
