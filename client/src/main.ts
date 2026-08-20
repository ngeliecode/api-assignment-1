import './style.css'
import { getProducts, getCategories } from './api'

const init = () => {
  getProducts()
  getCategories()
}

init()

const allLink = document.querySelector('.all')

allLink.addEventListener('click', (event) => {
  event.preventDefault()

  getProducts()
})
