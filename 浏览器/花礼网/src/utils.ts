function assumeFile(path: string): string | null {
  return new URL(path, import.meta.url).href
}

export {
  assumeFile
}
