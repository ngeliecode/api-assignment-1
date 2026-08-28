import { getProducts } from '../api'

export const initSort = () => {
  const allLink = document.querySelector('.all')
  const sortLink = document.querySelector('.sort-link')
  const closeSortBtn = document.querySelector('.close-sort button')
  const sortMenu = document.querySelector('.sort-overlay')

  allLink.addEventListener('click', (event) => {
    event.preventDefault()

    getProducts()
  })

  sortLink.addEventListener('click', () => {
    sortMenu.classList.add('open')
  })

  closeSortBtn.addEventListener('click', () => {
    sortMenu.classList.remove('open')
  })

  const sortButtons =
    document.querySelectorAll<HTMLButtonElement>('.sort-option')

  sortButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const currentCheckbox = button.querySelector('.checkbox')

      // Ta bort check från alla
      document.querySelectorAll('.checkbox').forEach((checkbox) => {
        checkbox.classList.remove('check')
      })

      // Lägg till check på den man klickade på
      currentCheckbox?.classList.add('check')

      // Läs av värdet
      const sort = button.dataset.sort

      // Klick på applicera-knappen
      const apply = document.querySelector('.apply-button')
      apply.addEventListener('click', () => {
        getProducts('', sort)

        sortMenu.classList.remove('open')
      })
    })
  })
}
