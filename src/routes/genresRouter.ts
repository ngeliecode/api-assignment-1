import express from 'express'
import {
  createGenre,
  deleteGenre,
  getAllGenres,
  getProductsByGenre,
  updateGenre,
} from '../controllers/genresController.js'
const router = express.Router()

router.get('/', getAllGenres)
router.get('/:id/products', getProductsByGenre)
router.post('/', createGenre)
router.patch('/:id', updateGenre)
router.delete('/:id', deleteGenre)

export default router
