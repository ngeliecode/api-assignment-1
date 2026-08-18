import express from 'express'
import {
  createCategory,
  deleteCategory,
  getAllCategories,
  getProductsByCategory,
  updateCategory,
} from '../controllers/categoriesController.js'
const router = express.Router()

router.get('/', getAllCategories)
router.get('/:id/products', getProductsByCategory)
router.post('/', createCategory)
router.patch('/:id', updateCategory)
router.delete('/:id', deleteCategory)

export default router
