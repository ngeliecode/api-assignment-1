import express from 'express'
import {
  createGenre,
  deleteGenre,
  getAllGenres,
  fetchProductsByGenre,
  updateGenre,
} from '../controllers/genresController.js'
const router = express.Router()

router.get('/', getAllGenres)
router.get('/:id/products', fetchProductsByGenre)
router.post('/', createGenre)
router.patch('/:id', updateGenre)
router.delete('/:id', deleteGenre)

export default router
