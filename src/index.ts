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

// Routes
app.get('/', (req, res) => {
  res.send('Express funkar!')
})

import productsRouter from './routes/productsRouter.js'
app.use('/products', productsRouter)
