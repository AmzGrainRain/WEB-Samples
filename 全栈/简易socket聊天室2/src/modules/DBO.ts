import { querySQL } from './DBInstance'
import type { User } from '../types'

const verifyLogin = async (email: string, pwd: string): Promise<User | null> => {
  const res = await querySQL<User[]>(`SELECT * FROM user WHERE email = '${email}'`)
  if (res.length !== 1 || res[0].password !== pwd) return null
  // record login successful count
  await querySQL(`UPDATE user SET login_count = login_count + 1 WHERE email = '${email}'`)
  return res[0]
}

const userAlreadyExists = async (email: string): Promise<boolean> => {
  const res = await querySQL<User[]>(`SELECT * FROM user WHERE email = '${email}'`)
  return res.length !== 0
}

const queryUserInfo = async (email: string): Promise<User | null> => {
  const res = await querySQL<User[]>(`SELECT * FROM user WHERE email = '${email}'`)
  return res.length === 0 ? null : res[0]
}

const registUser = async (email: string, password: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    querySQL(`INSERT INTO user(email, password) VALUES ('${email}', '${password}')`)
      .then(() => {
        resolve()
      })
      .catch((err) => {
        reject(err)
      })
  })
}

export { verifyLogin, userAlreadyExists, queryUserInfo, registUser }
