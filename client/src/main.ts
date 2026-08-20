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

const searchIcon = document.querySelector('.search-icon')

searchIcon.addEventListener('click', (event) => {
  event.preventDefault()

  const search = document.querySelector('.search-form')
  search.classList.toggle('show')
})
