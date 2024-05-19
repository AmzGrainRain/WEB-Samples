function assumeFile(path: string): string | null {
  return new URL(`./assets/${path}`, import.meta.url).href
}

export {
  assumeFile
}
