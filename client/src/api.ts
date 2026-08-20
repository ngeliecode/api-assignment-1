import { bookInfo } from './products'

export const getProducts = async (search = '') => {
  const productsContainer = document.querySelector('.products')
  const searchForm = document.querySelector('.search-form')

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

export const getCategories = async () => {
  const response = await fetch('http://localhost:3000/categories')
  const categories = await response.json()

  const categoryLinks = document.querySelector('.categories')

  categories.forEach((category) => {
    const link = document.createElement('a')

    link.href = '#'
    link.textContent = category.name
    link.dataset.id = category.id.toString()

    link.addEventListener('click', (event) => {
      event.preventDefault()

      getProductsByCategory(category.id.toString())
    })

    categoryLinks.append(link)
  })
}

export const getProductsByCategory = async (categoryId: string) => {
  const response = await fetch(
    `http://localhost:3000/categories/${categoryId}/products`,
  )

  const products = await response.json()

  const productsContainer = document.querySelector('.products')

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
      </div>
    `
  })
}
