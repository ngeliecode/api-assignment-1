import express from 'express'
import {
  createCategory,
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

export default router
