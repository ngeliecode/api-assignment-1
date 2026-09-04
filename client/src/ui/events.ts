import { fetchProducts, fetchProductsByGenre } from '../api'

export function addEvents() {
  const showAllGenresBtn = document.querySelector<HTMLButtonElement>('.all')
  showAllGenresBtn.addEventListener('click', () => {
    fetchProducts()
  })

  const genreButtons = document.querySelector('.genres')
  genreButtons.querySelectorAll('button').forEach((button) => {
    const genreId = button.dataset.id
    button.addEventListener('click', () => {
      fetchProductsByGenre(genreId)
    })
  })
}
