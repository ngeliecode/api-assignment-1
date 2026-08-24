import { getProducts } from '../api'

export const initSort = () => {
  const allLink = document.querySelector('.all')
  const sortLink = document.querySelector('.sort-link')
  const closeSortBtn = document.querySelector('.close-sort button')
  const sort = document.querySelector('.sort-overlay')

  allLink.addEventListener('click', (event) => {
    event.preventDefault()

    getProducts()
  })

  sortLink.addEventListener('click', () => {
    sort.classList.add('open')
  })

  closeSortBtn.addEventListener('click', () => {
    sort.classList.remove('open')
  })

  // CHECKBOX
  const checkBox = document.querySelectorAll('.checkbox')
  console.log(checkBox)

  const sortButtons = document.querySelectorAll('.sort-option')
  console.log(sortButtons)

  sortButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const currentCheckbox = button.querySelector('.checkbox')

      // Ta bort check från alla
      document.querySelectorAll('.checkbox').forEach((checkbox) => {
        checkbox.classList.remove('check')
      })

      // Lägg till check på den man klickade på
      currentCheckbox?.classList.add('check')
    })
  })
}
