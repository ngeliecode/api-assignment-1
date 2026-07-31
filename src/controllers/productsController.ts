import type { Request, Response } from 'express'
import { db } from '../config/db.js'

export const getAllProducts = async (req: Request, res: Response) => {
  // res.json({ message: 'Products route works!' })
  try {
    const sql = `
    SELECT * FROM products
    `

    const [products] = await db.query(sql)

    res.json(products)
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    res.status(500).json({ error: message })
  }
}
