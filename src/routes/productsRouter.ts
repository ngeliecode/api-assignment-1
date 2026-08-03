import express from 'express'
import {
  createProduct,
  getAllProducts,
  getProduct,
  updateProduct,
} from '../controllers/productsController.js'
const router = express.Router()

// Endpoints
router.get('/', getAllProducts)
router.get('/:id', getProduct)
router.post('/', createProduct)
router.patch('/:id', updateProduct)

export default router
