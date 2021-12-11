const first = document.querySelector('#first__mission')

const hamburgerContainer = document.querySelector('.hamburger__menu__container')
const navigation_menu = document.querySelector('.navigation_menu')

const header = document.querySelector('.header')
const headerInner = document.querySelector('.header .header__inner')
const headerBG = document.querySelector('.header .background')

const hamburger = document.querySelector('.hamburger')

const missions = document.querySelectorAll('.mission__container')
const footer = document.querySelector('.footer')

const IS_ACTIVE = 'is-active'

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle(IS_ACTIVE)
	navigation_menu.classList.toggle('open')
})

const observer = new IntersectionObserver(
	(entries) => {
		const ON_SCREEN = 'on__screen'

		entries.forEach((entry) => {
			const { target, isIntersecting } = entry

			if (!isIntersecting) {
				target.classList.remove(ON_SCREEN)

				return false
			}

			target.classList.add(ON_SCREEN)
		})
	},
	{
		rootMargin: '-50%',
	}
)

missions.forEach((mission) => observer.observe(mission))

let prevScrollpos = window.pageYOffset

const SHOW = 'show'
const HIDING = 'hiding'
const WITH_BACKGROUND = 'with__background'

window.onscroll = () => {
	const currentScrollPos = window.pageYOffset
	const halfScreenHeight = window.innerHeight / 2

	hamburger.classList.remove(IS_ACTIVE)
	navigation_menu.classList.remove('open')

	if (currentScrollPos < halfScreenHeight) {
		header.classList.remove(WITH_BACKGROUND)
	} else {
		header.classList.add(WITH_BACKGROUND)
	}

	if (prevScrollpos > currentScrollPos) {
		header.classList.add(SHOW)
	} else {
		header.setAttribute('id', HIDING)
		setTimeout(() => {
			header.removeAttribute('id')
		}, 600)
		header.classList.remove(SHOW)
	}
	prevScrollpos = currentScrollPos
}
