import { getProducts } from '../api'

export const initSearch = () => {
  const header = document.querySelector('header')
  const openSearch = document.querySelector('.search-icon')
  const closeSearch = document.querySelector('.close-search')

  openSearch?.addEventListener('click', () => {
    header?.classList.add('search-open')
  })

  closeSearch?.addEventListener('click', () => {
    header?.classList.remove('search-open')
  })
}

const searchForm = document.querySelector('.search-form')

searchForm.addEventListener('submit', (event) => {
  event.preventDefault()

  const searchInput = document.querySelector('#search') as HTMLInputElement
  const search = searchInput.value

  getProducts(search, '')
})
