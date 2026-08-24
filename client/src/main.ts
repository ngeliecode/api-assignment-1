import './styles/main.css'
import { getProducts, getCategories } from './api'
import { initSearch } from './ui/search'
import { initMenu } from './ui/menu'
import { initCheckout } from './ui/checkout'
import { initSort } from './ui/sort'

const init = () => {
  // API
  getProducts()
  getCategories()

  // UI
  initSearch()
  initMenu()
  initCheckout()
  initSort()
}

init()
