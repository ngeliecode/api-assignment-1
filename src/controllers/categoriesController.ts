import type { Request, Response } from 'express'
import { db } from '../config/db.js'

export const getAllCategories = async (req: Request, res: Response) => {
  try {
    const sql = `

    SELECT * FROM categories
    `

    const [result] = await db.query(sql)
    res.json(result)
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    res.status(500).json({ error: message })
  }
}
