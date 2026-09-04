import { fetchProductsByGenre } from '../api'

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

  genres.forEach((genre) => {
    const button = document.createElement('button')
    button.textContent = genre.name
    button.dataset.id = genre.id.toString()
    button.addEventListener('click', (event) => {
      event.preventDefault()

      fetchProductsByGenre(genre.id.toString())
    })

    genreLinks.append(button)
  })
}
