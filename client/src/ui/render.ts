import { addEvents } from '../ui/events'

interface Product {
  id: number
  title: string
  author: string
  image: string
  price: number
}

interface Genre {
  id: number
  name: string
}

export function renderProducts(products: Product[]) {
  const productsContainer = document.querySelector<HTMLElement>('.products')

  if (!productsContainer) {
    return
  }

  productsContainer.innerHTML = products
    .map(
      (product) => `     
      <div class="product">
        <img src="${product.image}" alt="${product.title}">
        <h2>${product.title}</h2>
        <p>${product.author}</p>
        <p>${Number(product.price)} kr</p>
      </div>`,
    )
    .join('')
}

export function renderGenres(genres: Genre[]) {
  const genreLinks = document.querySelector('.genres')

  if (!genreLinks) {
    return
  }

  genreLinks.innerHTML += genres
    .map(
      (genre) => `
        <button data-id="${genre.id}">
          ${genre.name}
        </button>
      `,
    )
    .join('')

  addEvents()
}

export function renderProductsByGenre(products: Product[]) {
  const productsContainer = document.querySelector('.products')

  if (!productsContainer) {
    return
  }

  productsContainer.innerHTML = products
    .map(
      (product) => `
        <div class="product">
          <img src="${product.image}" alt="${product.title}">
          <h2>${product.title}</h2>
          <p>${Number(product.price)} kr</p>
        </div>
      `,
    )
    .join('')
}
