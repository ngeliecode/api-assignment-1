import { renderProducts } from './ui/renderProducts'

export const getProducts = async (search = '', sort = '') => {
  const response = await fetch(
    `http://localhost:3000/products?search=${search}&sort=${sort}`,
  )
  const products = await response.json()
  renderProducts(products)
}

export const getGenres = async () => {
  const response = await fetch('http://localhost:3000/genres')
  const genres = await response.json()

  const genreLinks = document.querySelector('.genres')

  genres.forEach((genre) => {
    const button = document.createElement('button')
    button.textContent = genre.name
    button.dataset.id = genre.id.toString()
    button.addEventListener('click', (event) => {
      event.preventDefault()

      getProductsByGenre(genre.id.toString())
    })

    genreLinks.append(button)
  })
}

export const getProductsByGenre = async (genreId: string) => {
  const response = await fetch(
    `http://localhost:3000/genres/${genreId}/products`,
  )

  const products = await response.json()

  const productsContainer = document.querySelector('.products')

  productsContainer.innerHTML = ''

  products.forEach((product) => {
    productsContainer.innerHTML += `
      <div class="product">
        <img src="${product.image}" alt="${product.title}">
        <h2>${product.title}</h2>
        <p>${Number(product.price)} kr</p>
      </div>
    `
  })
}
