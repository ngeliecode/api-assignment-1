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

export const createCategory = async (req: Request, res: Response) => {
  const name = req.body.name

  try {
    const sql = `

            INSERT INTO categories (name)
            VALUES (?)
        `

    const [result] = await db.query(sql, [name])
    res.json(result)
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    res.status(500).json({ error: message })
  }
}

export const updateCategory = async (req: Request, res: Response) => {
  const id = req.params.id
  const name = req.body.name

  try {
    const sql = `

            UPDATE categories
            SET name = ?
            WHERE id = ?
        `

    const [result] = await db.query(sql, [name, id])
    res.json(result)
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    res.status(500).json({ error: message })
  }
}

export const deleteCategory = async (req: Request, res: Response) => {
  const id = req.params.id

  try {
    const sql = `

            DELETE FROM categories
            WHERE id = ?
        `

    const [result] = await db.query(sql, [id])
    res.json(result)
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    res.status(500).json({ error: message })
  }
}
