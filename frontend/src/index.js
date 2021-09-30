import { Landing, HIDDEN_LANDING_KEY } from './sections/landing'
import { Work } from './sections/work'
import { Contact } from './sections/contact'

if (document.querySelector('section.landing')) {
    new Landing()
}

if (document.querySelector('section.work')) {
    new Work()
}

new Contact()
let mobileOpen = false
document.querySelector('#mobile-nav')
    .addEventListener('click', () => {
        document.querySelector('header').classList.toggle('mobile-open')

        mobileOpen = !mobileOpen
        
    })
document.querySelector('.work-nav')
    .addEventListener('click', () => {
        localStorage.setItem(HIDDEN_LANDING_KEY, 'true')
    })

    localStorage.removeItem(HIDDEN_LANDING_KEY)