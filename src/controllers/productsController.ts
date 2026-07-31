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
