import { Landing, HIDDEN_LANDING_KEY } from './sections/landing'
import { Work } from './sections/work'

if (document.querySelector('section.landing')) {
    new Landing()
}

if (document.querySelector('section.work')) {
    new Work()
}

document.querySelector('.work-nav')
    .addEventListener('click', () => {
        localStorage.setItem(HIDDEN_LANDING_KEY, 'true')
    })