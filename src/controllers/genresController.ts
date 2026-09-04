import type { Request, Response } from 'express'
import { db } from '../config/db.js'
import type { ResultSetHeader, RowDataPacket } from 'mysql2'

export const getAllGenres = async (req: Request, res: Response) => {
  try {
    const sql = `
    
        SELECT * FROM genres`

    const [result] = await db.query(sql)

    res.status(200).json(result)
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    res.status(500).json({ error: message })
  }
}

export const fetchProductsByGenre = async (req: Request, res: Response) => {
  const id = req.params.id

  try {
    const genreSql = `

        SELECT * FROM genres
        WHERE id = ?`

    const [genres] = await db.query<RowDataPacket[]>(genreSql, [id])

    if (genres.length === 0) {
      return res.status(404).json({
        message: 'Genre not found',
      })
    }

    const productsSql = `

      SELECT * 
        FROM products 
        JOIN products_genres
          ON products.id = products_genres.product_id
       WHERE products_genres.genre_id = ?`

    const [products] = await db.query<RowDataPacket[]>(productsSql, [id])

    if (products.length === 0) {
      return res.status(200).json({
        message: 'No products found for this genre',
      })
    }

    res.status(200).json(products)
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    res.status(500).json({ error: message })
  }
}

export const createGenre = async (req: Request, res: Response) => {
  const name = req.body.name

  try {
    if (name === undefined) {
      return res.status(400).json({
        message: 'Name is required',
      })
    }

    if (typeof name !== 'string') {
      return res.status(400).json({
        message: 'Name must be a string',
      })
    }

    if (name.trim() === '') {
      return res.status(400).json({
        message: 'Name cannot be empty',
      })
    }

    const sql = `

        INSERT INTO genres (name)
        VALUES (?)`

    await db.query(sql, [name])

    res.status(201).json({
      message: 'Genre created',
    })
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    res.status(500).json({ error: message })
  }
}

export const updateGenre = async (req: Request, res: Response) => {
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

        UPDATE genres
        SET ${updates.join(', ')}
        WHERE id = ?`

    params.push(id)

    const [result] = await db.query<ResultSetHeader>(sql, params)

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: 'Genre not found',
      })
    }

    res.status(200).json({
      message: 'Genre updated',
    })
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    res.status(500).json({ error: message })
  }
}

export const deleteGenre = async (req: Request, res: Response) => {
  const id = req.params.id

  try {
    const sql = `

        DELETE FROM genres
        WHERE id = ?`

    const [result] = await db.query<ResultSetHeader>(sql, [id])

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: 'Genre not found',
      })
    }

    res.status(200).json({
      message: 'Genre deleted',
    })
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    res.status(500).json({ error: message })
  }
}
