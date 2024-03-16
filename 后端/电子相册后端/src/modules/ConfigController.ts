import { readJson, writeJson } from 'fs-extra'
import { Configs } from '../common/types'
import { resolve } from 'path'

let data: Configs | undefined

export default class ConfigController {
  private readonly path: string
  private modified: boolean

  private constructor() {
    this.path = resolve(__dirname, '../config.json')
    this.modified = false
  }

  public async save(newData: Configs): Promise<boolean> {
    try {
      await writeJson(this.path, newData)
      this.modified = true
      return true
    } catch (err) {
      console.error(err)
      return false
    }
  }

  public async get(): Promise<Configs | undefined> {
    try {
      if (!data || this.modified) {
        this.modified = false
        data = await readJson(this.path)
      }
      return data
    } catch (err) {
      console.error(err)
    }
  }

  private static instance: ConfigController | undefined
  public static getInstance(): ConfigController {
    if (!this.instance) this.instance = new ConfigController()
    return this.instance
  }
}
