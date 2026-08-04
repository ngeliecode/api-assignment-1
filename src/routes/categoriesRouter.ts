import express from 'express'
import {
  getAllCategories,
  getCategory,
} from '../controllers/categoriesController.js'
const router = express.Router()

// Endpoints
router.get('/', getAllCategories)
router.get('/:id', getCategory)

export default router
