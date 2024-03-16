export type Configs = {
  user: {
    name: string
    email: string
    password: string
    avator: string
    [key: string]: string
  }
}

export type User = {
  name: string
  email: string
  password: string
}

export type File = {
  name: string
  type: string
  path: string
  size: number
  createAt: number
}

export type ImageFile= File & {
  preview_image_path: string
  width: number
  height: number
  tags: string[]
}

export type VideoFile = File & {
  cover_image_path: string
  width: number
  height: number
  duration: number
  tags: string[]
}

export const SupportedImageTypes = new Set<string>()
SupportedImageTypes.add('png')
SupportedImageTypes.add('jpg')
SupportedImageTypes.add('jpeg')
SupportedImageTypes.add('heif')
SupportedImageTypes.add('heic')
SupportedImageTypes.add('gif')
SupportedImageTypes.add('webp')
SupportedImageTypes.add('svg')

export const SupportedVideoTypes = new Set<string>()
SupportedVideoTypes.add('mp4')
SupportedVideoTypes.add('flv')
SupportedVideoTypes.add('webm')
SupportedVideoTypes.add('mov')
SupportedVideoTypes.add('rmvb')
SupportedVideoTypes.add('mkv')
SupportedVideoTypes.add('m3u8')
