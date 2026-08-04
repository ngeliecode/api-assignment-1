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

export const getCategory = async (req: Request, res: Response) => {
  const id = req.params.id

  try {
    const sql = `

        SELECT * FROM categories 
        WHERE id = ?
        `

    const [result] = await db.query(sql, [id])
    res.json(result)
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    res.status(500).json({ error: message })
  }
}
