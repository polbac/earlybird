import { Landing, HIDDEN_LANDING_KEY } from './sections/landing'
import { Work } from './sections/work'
import { Contact } from './sections/contact'
import { Directors } from './sections/directors'
import Plyr from 'plyr';

if (document.querySelector('section.landing')) {
    new Landing()
}

if (document.querySelector('section.work')) {
    new Work()
}

if (document.querySelector('section.directors')) {
    new Directors()
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


const video = document.querySelector("video")

if (video) {
    const player = new Plyr('video', {
        controls: ['play-large']
    });

}