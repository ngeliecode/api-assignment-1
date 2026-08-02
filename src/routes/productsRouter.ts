import express from 'express'
import {
  createProduct,
  getAllProducts,
  getProduct,
} from '../controllers/productsController.js'
const router = express.Router()

// Endpoints
router.get('/', getAllProducts)
router.get('/:id', getProduct)
router.put('/:id', createProduct)

export default router
