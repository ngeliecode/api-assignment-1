import type { Request, Response } from 'express'
import { db } from '../config/db.js'
import type { ResultSetHeader } from 'mysql2'

export const getAllCategories = async (req: Request, res: Response) => {
  try {
    const sql = `
    
        SELECT * FROM categories`

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
        WHERE id = ?`

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
        VALUES (?)`

    await db.query(sql, [name])

    res.status(201).json({
      message: 'Category created',
    })
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    res.status(500).json({ error: message })
  }
}

export const updateCategory = async (req: Request, res: Response) => {
  const id = req.params.id
  const { name } = req.body

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
        WHERE id = ?`

    params.push(id)

    const [result] = await db.query<ResultSetHeader>(sql, params)

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: 'Category not found',
      })
    }

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
        WHERE id = ?`

    const [result] = await db.query<ResultSetHeader>(sql, [id])

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: 'Category not found',
      })
    }

    res.status(200).json({
      message: 'Category deleted',
    })
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    res.status(500).json({ error: message })
  }
}
