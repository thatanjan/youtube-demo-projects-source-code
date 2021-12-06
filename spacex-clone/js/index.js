const hamburgerContainer = document.querySelector('.hamburger__menu__container')
const navigation_menu = document.querySelector('.navigation_menu')

const header = document.querySelector('.header')
const headerInner = document.querySelector('.header .header__inner')
const headerBG = document.querySelector('.header .background')

const hamburger = document.querySelector('.hamburger')

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('is-active')
	navigation_menu.classList.toggle('open')
})

let prevScrollpos = window.pageYOffset

const SHOW = 'show'
const HIDING = 'hiding'
const WITH_BACKGROUND = 'with__background'

window.onscroll = () => {
	const currentScrollPos = window.pageYOffset
	const halfScreenHeight = window.innerHeight / 2

	if (currentScrollPos < halfScreenHeight) {
		header.classList.remove(WITH_BACKGROUND)
	} else {
		header.classList.add(WITH_BACKGROUND)
	}

	if (prevScrollpos > currentScrollPos) {
		header.setAttribute('id', HIDING)
		header.classList.add(SHOW)

		setTimeout(() => {
			header.removeAttribute('id')
		}, 500)
	} else {
		header.classList.remove(SHOW)
	}
	prevScrollpos = currentScrollPos
}
