import { bookInfo } from './products'
import { renderProducts } from './ui/renderProducts'

export const getProducts = async (search = '', sort = '') => {
  const response = await fetch(
    `http://localhost:3000/products?search=${search}&sort=${sort}`,
  )
  const products = await response.json()
  renderProducts(products)
}

export const getCategories = async () => {
  const response = await fetch('http://localhost:3000/categories')
  const categories = await response.json()

  const categoryLinks = document.querySelector('.categories')

  categories.forEach((category) => {
    const button = document.createElement('button')
    button.textContent = category.name
    button.dataset.id = category.id.toString()
    button.addEventListener('click', (event) => {
      event.preventDefault()

      getProductsByCategory(category.id.toString())
    })

    categoryLinks.append(button)
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
