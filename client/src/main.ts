import './styles/main.css'
import { getProducts, getGenres } from './api'
import { initSearch } from './ui/search'
import { initMenu } from './ui/menu'
import { initCheckout } from './ui/checkout'
import { initSort } from './ui/sort'

const init = () => {
  // API
  getProducts()
  getGenres()

  // UI
  initSearch()
  initMenu()
  initCheckout()
  initSort()
}

init()
