import { addEvents } from '../ui/events'

export function renderProducts(products) {
  const productsContainer = document.querySelector<HTMLElement>('.products')
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

export function renderGenres(genres) {
  const genreLinks = document.querySelector('.genres')
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

export function renderProductsByGenre(products) {
  const productsContainer = document.querySelector('.products')
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
