import { fetchProducts, fetchProductsByGenre } from '../api'

export function addEvents() {
  const showAllGenresBtn = document.querySelector<HTMLButtonElement>('.all')
  const genreButtons = document.querySelector('.genres')

  if (!showAllGenresBtn || !genreButtons) {
    return
  }

  showAllGenresBtn.addEventListener('click', () => {
    fetchProducts()
  })

  genreButtons.querySelectorAll('button').forEach((button) => {
    const genreId = button.dataset.id

    if (genreId) {
      button.addEventListener('click', () => {
        fetchProductsByGenre(genreId)
      })
    }
  })
}
