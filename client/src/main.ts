import './styles/main.css'
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

const checkoutButton = document.querySelector('.checkout-button')
const checkout = document.querySelector('.checkout')

checkoutButton.addEventListener('click', () => {
  checkoutButton.classList.toggle('open')
  checkout.classList.toggle('open')
  document.body.classList.toggle('checkout-open')
})

const sortLink = document.querySelector('.sort-link')
const closeSortBtn = document.querySelector('.close-sort button')

const sort = document.querySelector('.sort-overlay')

sortLink.addEventListener('click', () => {
  sortLink.classList.add('open')
  sort.classList.add('open')
})

closeSortBtn.addEventListener('click', () => {
  sort.classList.remove('open')
})

// CHECKBOX
const checkBox = document.querySelectorAll('.checkbox')
console.log(checkBox)

const sortButtons = document.querySelectorAll('.sort-option')
console.log(sortButtons)

sortButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const currentCheckbox = button.querySelector('.checkbox')

    // Ta bort check från alla
    document.querySelectorAll('.checkbox').forEach((checkbox) => {
      checkbox.classList.remove('check')
    })

    // Lägg till check på den man klickade på
    currentCheckbox?.classList.add('check')
  })
})
