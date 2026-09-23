import { fetchProducts } from '../../api'

export const initSort = () => {
  const sortMenu = document.querySelector<HTMLElement>('.sort-menu')
  const openSortMenuBtn = document.querySelector<HTMLButtonElement>('.sort')
  const closeSortMenuBtn = document.querySelector('.close-sort')

  if (!sortMenu || !openSortMenuBtn || !closeSortMenuBtn) {
    return
  }

  openSortMenuBtn.addEventListener('click', () => {
    sortMenu.classList.add('open')
  })

  closeSortMenuBtn.addEventListener('click', () => {
    sortMenu.classList.remove('open')
  })

  const sortOptionButtons =
    document.querySelectorAll<HTMLButtonElement>('.sort-option')

  sortOptionButtons.forEach((button) => {
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

      const apply = document.querySelector('.apply')

      if (apply) {
        apply.addEventListener('click', () => {
          fetchProducts(sort)

          sortMenu.classList.remove('open')
        })
      }
    })
  })
}
