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
    const updates: string[] = []
    const params: unknown[] = []

    if (name !== undefined) {
      updates.push('name = ?')
      params.push(name)
    }

    if (updates.length === 0) {
      return res.status(400).json({
        message: 'No fields to update',
      })
    }

    const sql = `

            UPDATE categories
            SET ${updates.join(', ')}
            WHERE id = ?
        `

    params.push(id)

    console.log('SQL:', sql)
    console.log('Updates:', updates)
    console.log('Params:', params)

    await db.query(sql, params)

    res.status(200).json({
      message: 'Category updated',
    })
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
