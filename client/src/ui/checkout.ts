export const initCheckout = () => {
  const checkoutButton = document.querySelector('.checkout-button')
  const checkout = document.querySelector('.checkout')

  checkoutButton.addEventListener('click', () => {
    checkoutButton.classList.toggle('open')
    checkout.classList.toggle('open')
    document.body.classList.toggle('checkout-open')
  })
}
