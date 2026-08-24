export const initSearch = () => {
  const header = document.querySelector('header')
  const openSearch = document.querySelector('.search-icon')
  const closeSearch = document.querySelector('.close-search')

  openSearch?.addEventListener('click', () => {
    header?.classList.add('search-open')
  })

  closeSearch?.addEventListener('click', () => {
    header?.classList.remove('search-open')
  })
}
