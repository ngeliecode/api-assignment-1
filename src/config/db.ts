import mysql from 'mysql2/promise'

console.log(`Hello ${process.env.DB_HOST}`)

export const db = mysql.createPool({
  host: process.env.DB_HOST!,
  user: process.env.DB_USER!,
  database: process.env.DB_NAME!,
  password: process.env.DB_PASSWORD!,
  port: Number(process.env.DB_PORT),
})

export const connectToDatabase = async () => {
  try {
    await db.getConnection()
    console.log('Connected to database')
  } catch (error: unknown) {
    console.log('Error connecting to database: ' + error)
  }
}
