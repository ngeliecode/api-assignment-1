import './style.css'
import { bookInfo } from './products'

const productsContainer = document.querySelector('.products')

const getProducts = async () => {
  const response = await fetch('http://localhost:3000/products')
  const products = await response.json()

  console.log(products)

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

getProducts()
