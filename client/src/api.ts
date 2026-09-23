import {
  renderProducts,
  renderGenres,
  renderProductsByGenre,
} from './ui/render'

const API_URL = 'https://api-assignment-1-ten.vercel.app'
const PRODUCTS_URL = API_URL + '/products'
const GENRES_URL = API_URL + '/genres'

export const fetchProducts = async (sort = '') => {
  try {
    const response = await fetch(PRODUCTS_URL + `?sort=${sort}`)
    const products = await response.json()

    renderProducts(products)
  } catch (error) {
    const productsElement = document.querySelector('.products')

    if (productsElement) {
      productsElement.innerHTML =
        'Opps something when wrong. Please try again later!'
    }

    console.log(error)
  }
}

export const fetchGenres = async () => {
  try {
    const response = await fetch(GENRES_URL)
    const genres = await response.json()

    renderGenres(genres)
  } catch (error) {
    console.log(error)
  }
}

export const fetchProductsByGenre = async (id: string) => {
  try {
    const response = await fetch(GENRES_URL + `/${id}/products`)
    const products = await response.json()
    renderProductsByGenre(products)
  } catch (error) {
    console.log(error)
  }
}
