import express from 'express'
import {
  getAllProducts,
  getProduct,
} from '../controllers/productsController.js'
const router = express.Router()

// Endpoints
router.get('/', getAllProducts)
router.get('/:id', getProduct)

export default router
