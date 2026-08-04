import 'dotenv/config'
import express from 'express'
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
app.use(express.json()) // This specific middleware parses JSON string to Javascript Object
//app.use(cors()) // This makes the Express server except request from other domains

// Routes
import productsRouter from './routes/productsRouter.js'
app.use('/products', productsRouter)

import categoriesRouter from './routes/categoriesRouter.js'
app.use('/categories', categoriesRouter)
