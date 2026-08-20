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

const header = document.querySelector('header')

const openSearch = document.querySelector('.search-icon')
openSearch?.addEventListener('click', () => {
  header?.classList.add('search-open')
})

const closeSearch = document.querySelector('.close-search')
closeSearch?.addEventListener('click', () => {
  header?.classList.remove('search-open')
})

const menuButton = document.querySelector('.menu-button')!
const menu = document.querySelector('.menu')!

menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('open')
  menu.classList.toggle('open')
  document.body.classList.toggle('menu-open')
})
