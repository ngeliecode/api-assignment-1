import 'dotenv/config'
import express from 'express'
import cors from 'cors'
const app = express()

// Start express server
const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})

// Test DB connection
import { connectToDatabase } from './config/db.js'
connectToDatabase()

// Middleware
app.use(express.json())
app.use(cors())

// Routes
import productsRouter from './routes/productsRouter.js'
app.use('/products', productsRouter)

import genresRouter from './routes/genresRouter.js'
app.use('/genres', genresRouter)
