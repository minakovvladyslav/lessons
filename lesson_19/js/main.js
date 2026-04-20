"use strict"

document.addEventListener('click', documentActions)

function documentActions(e) {
	const targetElement = e.target

	if (targetElement.closest('.header__burger')) {
		document.documentElement.toggleAttribute('data-menu-open')
	}

}

const headerElement = document.querySelector(`.header__list`)
const headerBlock = document.querySelector(`header`)
if(headerElement) {
	window.addEventListener(`scroll`, function() {
	const pixels = window.scrollY
	console.log(pixels)
	if(pixels > 50 && window.innerWidth <= 950) {
		headerElement.style.setProperty(`--before-bg`,`var(--bcBlack)`)
		headerElement.style.setProperty(`--opacity-before`,`0.9`)
	} else {
		headerElement.style.setProperty(`--before-bg`,`-transparent`)
		headerElement.style.setProperty(`--opacity-before`,`0`)
	}
	if(headerElement) {
	if(window.innerWidth >= 950 && pixels > 50) {
		headerBlock.style.backgroundColor = `black`
	} else {
		headerBlock.style.backgroundColor = `transparent`
	}
}
	})
}


	// if(pixels > 50) {
	// 	headerElement.style.cssText = `    background-color: #1D1D1D;opacity: 0.7;`
	// } else {
	// 	headerElement.style.cssText = `background-color: transparent;`
	// }

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
	preloaderItem[i].style.cssText += `animation-delay: 0.${i}s`
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