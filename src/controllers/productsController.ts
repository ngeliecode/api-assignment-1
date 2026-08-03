import type { Request, Response } from 'express'
import { db } from '../config/db.js'

export const getAllProducts = async (req: Request, res: Response) => {
  const search = req.query.search
  const sort = req.query.sort

  try {
    let params: string[] = []
    let sql = `
    
              SELECT * FROM products
    `

    // Använd URL:en följt av sökordet för att testa sökfunktionen
    // http://localhost:3000/products?search=

    if (search) {
      params = [`%${search}%`, `%${search}%`]
      sql += ` 
      
              WHERE products.title LIKE ?
              `
    }

    // http://localhost:3000/products?sort=asc
    // http://localhost:3000/products?sort=desc

    if (sort) {
      sql +=
        sort == 'asc'
          ? ' ORDER BY products.title ASC'
          : ' ORDER BY products.title DESC'
    }

    const [rows] = await db.query(sql, params)
    res.json(rows)
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    res.status(500).json({ error: message })
  }
}

export const getProduct = async (req: Request, res: Response) => {
  const id = req.params.id

  try {
    const [rows] = await db.query(
      `
              SELECT * FROM products 
              WHERE id = ?`,
      [id],
    )

    res.json(rows)
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    res.status(500).json({ error: message })
  }
}

export const createProduct = async (req: Request, res: Response) => {
  // Object destructuring
  const { title, description, stock, price } = req.body

  // const title = req.body.title
  // const description = req.body.description
  // const price = req.body.price

  // req.body = (request.body) is an object that contains the data sent in the request body.

  try {
    const sql = `
    
              INSERT INTO products (title, description, stock, price)
              VALUES (?, ?, ?, ?)`

    const [result] = await db.query(sql, [title, description, stock, price])
    console.log(result)
    res.status(201).json({ message: 'Product created' })

    // {
    // 	"title": "Sagan om ringen",
    // 	"description": "Fantasy av J.R. Tolkien",
    // 	"stock": 5,
    // 	"price": 255
    // }
  } catch (error: unknown) {
    console.error(error)
    res.status(500).json({
      error: 'Failed to create product',
    })
  }
}

export const updateProduct = async (req: Request, res: Response) => {
  const id = req.params.id
  const { title, description, stock, price } = req.body

  try {
    const sql = `

           UPDATE products
              SET title       = ?, 
                  description = ?, 
                  stock       = ?, 
                  price       = ?
            WHERE id          = ?`

    const [result] = await db.query(sql, [title, description, stock, price, id])
    console.log(result)
    res.status(200).json({ message: 'Product updated' })
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : 'Failed to update product'

    res.status(500).json({ error: message })
  }
}
