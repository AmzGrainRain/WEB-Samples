import { createPool as createDatabaseConnectionPool, PoolConnection } from 'mariadb'

export const pool = createDatabaseConnectionPool({
  host: '127.0.0.1',
  user: 'root',
  password: '123123',
  database: 'chat',
  connectionLimit: 20
})

export const querySQL = async <T>(sql: string): Promise<T> => {
  let connection: PoolConnection | undefined
  try {
    connection = await pool.getConnection()
    return await connection.query(sql)
  } catch (err) {
    throw err
  } finally {
    if (connection) await connection.release()
  }
}
