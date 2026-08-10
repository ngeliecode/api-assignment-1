import type { Request, Response } from 'express'
import { db } from '../config/db.js'
import type { ResultSetHeader } from 'mysql2'

export const getAllProducts = async (req: Request, res: Response) => {
  const search = req.query.search
  const sort = req.query.sort

  try {
    let params: unknown[] = []
    let sql = `
    
        SELECT * FROM products`

    if (search) {
      params = [`%${search}%`]
      sql += ` 
        WHERE title LIKE ?`
    }

    if (sort) {
      sql +=
        sort === 'asc'
          ? ` 
        ORDER BY title ASC`
          : ` 
        ORDER BY title DESC`
    }

    // GET http://localhost:3000/products?search=keyword
    // GET http://localhost:3000/products?sort=asc
    // GET http://localhost:3000/products?sort=desc
    // GET http://localhost:3000/products?search=keyword&sort=asc
    // GET http://localhost:3000/products?search=keyword&sort=desc

    console.log(sql)
    const [result] = await db.query(sql, params)
    res.json(result)
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    res.status(500).json({ error: message })
  }
}

export const getProduct = async (req: Request, res: Response) => {
  const id = req.params.id

  try {
    const sql = `

        SELECT * FROM products 
        WHERE id = ?`

    const [result] = await db.query(sql, [id])
    res.json(result)
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    res.status(500).json({ error: message })
  }
}

export const createProduct = async (req: Request, res: Response) => {
  const { title, description, stock, price, image } = req.body

  try {
    const sql = `

        INSERT INTO products (title, description, stock, price, image)
        VALUES (?, ?, ?, ?, ?)
        `

    await db.query(sql, [title, description, stock, price, image])

    res.status(201).json({
      message: 'Product created',
    })
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    res.status(500).json({ error: message })
  }
}

export const updateProduct = async (req: Request, res: Response) => {
  const id = req.params.id
  const { title, description, stock, price, image } = req.body

  try {
    const updates: string[] = []
    const params: unknown[] = []

    if (title !== undefined) {
      updates.push('title = ?')
      params.push(title)
    }

    if (description !== undefined) {
      updates.push('description = ?')
      params.push(description)
    }

    if (stock !== undefined) {
      updates.push('stock = ?')
      params.push(stock)
    }

    if (price !== undefined) {
      updates.push('price = ?')
      params.push(price)
    }

    if (image !== undefined) {
      updates.push('image = ?')
      params.push(image)
    }

    if (updates.length === 0) {
      return res.status(400).json({
        message: 'No fields to update',
      })
    }

    const sql = `

        UPDATE products
        SET ${updates.join(', ')}
        WHERE id = ?
        `

    params.push(id)

    // console.log('SQL:', sql)
    // console.log('Updates:', updates)
    // console.log('Params:', params)

    await db.query(sql, params)

    res.status(200).json({
      message: 'Product updated',
    })
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    res.status(500).json({ error: message })
  }
}

export const deleteProduct = async (req: Request, res: Response) => {
  const id = req.params.id

  try {
    const sql = `
    
        DELETE FROM products
        WHERE id = ?
        `

    const [result] = await db.query<ResultSetHeader>(sql, [id])

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: 'Product not found',
      })
    }

    res.status(200).json({
      message: 'Product deleted',
    })
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    res.status(500).json({ error: message })
  }
}
