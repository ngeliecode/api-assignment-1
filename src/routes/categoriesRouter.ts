import express from 'express'
import { getAllCategories } from '../controllers/categoriesController.js'
const router = express.Router()

// Endpoints
router.get('/', getAllCategories)

export default router
