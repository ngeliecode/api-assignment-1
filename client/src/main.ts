import './styles/main.css'

import { fetchProducts, fetchGenres } from './api'

import { initSearch } from './ui/components/search'
import { initMenu } from './ui/components/menu'
import { initCheckout } from './ui/components/checkout'
import { initSort } from './ui/components/sort'

const init = () => {
  // API
  fetchProducts()
  fetchGenres()

  // UI
  initSearch()
  initMenu()
  initCheckout()
  initSort()
}

init()
