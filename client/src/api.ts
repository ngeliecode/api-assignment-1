import {
  renderProducts,
  renderGenres,
  renderProductsByGenre,
} from './ui/render'

export const fetchProducts = async (search = '', sort = '') => {
  try {
    const response = await fetch(
      `http://localhost:3000/products?search=${search}&sort=${sort}`,
    )
    const products = await response.json()
    renderProducts(products)
  } catch (error) {
    const productsElement = document.querySelector('.products')
    productsElement.innerHTML =
      'Opps something when wrong. Please try again later!'
    console.log(error)
  }
}

export const fetchGenres = async () => {
  try {
    const response = await fetch('http://localhost:3000/genres')
    const genres = await response.json()
    renderGenres(genres)
  } catch (error) {
    console.log(error)
  }
}

export const fetchProductsByGenre = async (genreId: string) => {
  try {
    const response = await fetch(
      `http://localhost:3000/genres/${genreId}/products`,
    )
    const products = await response.json()
    renderProductsByGenre(products)
  } catch (error) {
    console.log(error)
  }
}
