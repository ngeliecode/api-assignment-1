import './style.css'

const getProducts = async () => {
  const response = await fetch('http://localhost:3000/products')
  const products = await response.json()

  console.log(products)
}

getProducts()
