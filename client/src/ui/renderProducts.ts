export function renderProducts(products) {
  const productsContainer = document.querySelector<HTMLElement>('.products')

  productsContainer.innerHTML = ''

  products.forEach((product) => {
    productsContainer.innerHTML += `
      <div class="product">
        <img src="${product.image}" alt="${product.title}">
        <h2>${product.title}</h2>
        <p>${product.author}</p>
        <p>${Number(product.price)} kr</p>
      </div>
    `
  })
}
