import express from 'express'
import {
  createCategory,
  deleteCategory,
  getAllCategories,
  getCategory,
  updateCategory,
} from '../controllers/categoriesController.js'
const router = express.Router()

// Endpoints
router.get('/', getAllCategories)
router.get('/:id', getCategory)
router.post('/', createCategory)
router.patch('/:id', updateCategory)
router.delete('/:id', deleteCategory)

export default router
