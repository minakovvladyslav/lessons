"use strict"

document.addEventListener('click', documentActions)

function documentActions(e) {
	const targetElement = e.target

	if (targetElement.closest('.header__burger')) {
		document.documentElement.toggleAttribute('data-menu-open')
	}

}
const backgound = document.querySelector(`.header`)
if(backgound) {
	window.addEventListener(`scroll`, function() {
	const pixels = window.scrollY
	console.log(pixels)
	if(pixels > 50) {
		backgound.classList.add(`scrolled`)
	} else {
		backgound.classList.remove(`scrolled`)
	}
})
}

let translate = 0
const supportElement = document.querySelector(`.supprort`)
const infoElement = document.querySelector(`.info__container`)
const supportCloseElement = document.querySelector(`.support__close`)

function appearSupport(entries,observer) {
	const item = entries[0]
	console.log(item.target)
	if(item.isIntersecting) {
		supportElement.style.left = `${translate}px`
	} 
}

const options = {
	threshold : 0.1,
}

const infoObserver = new IntersectionObserver(appearSupport,options)
infoObserver.observe(infoElement)
supportCloseElement.addEventListener(`click`,()=>{
	supportElement.style.left = `-100%`
})

const preloaderItem = document.querySelectorAll(`.preloader__item`)
for(let i = 0; i < preloaderItem.length; i++) {
	preloaderItem[i].style.cssText = `animation-delay: 0.${i}s`
}

const loaderElement = document.querySelector(`.preloader`)
console.log(loaderElement)
window.addEventListener(`load`, () => {
	if(loaderElement) {
		setTimeout(() => {
		loaderElement.classList.add(`visually-hidden`)
	},1500)
	}
})