export const initMenu = () => {
  const menuButton = document.querySelector('.menu-button')!
  const menu = document.querySelector('.menu')!

  menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('open')
    menu.classList.toggle('open')
    document.body.classList.toggle('menu-open')
  })
}
