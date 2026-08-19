import './style.css'
import { bookInfo } from './products'

const getProducts = async (search = '') => {
  const productsContainer = document.querySelector('.products')
  const searchForm = document.querySelector('.search-form form')

  const response = await fetch(
    `http://localhost:3000/products?search=${search}`,
  )

  const products = await response.json()

  productsContainer.innerHTML = ''

  products.forEach((product) => {
    const info = bookInfo[product.id]

    productsContainer.innerHTML += `
      <div class="product">
        <img src="${product.image}" alt="${product.title}">
        <h2>${product.title}</h2>
        <p>${info.author}</p>
        <p>${info.format}</p>
        <p>${Number(product.price)} kr</p>
        <button class="addBtn">Lägg till</button>
      </div>
    `
  })

  searchForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const searchInput = document.querySelector('#search') as HTMLInputElement
    const search = searchInput.value

    getProducts(search)
  })
}

getProducts()
