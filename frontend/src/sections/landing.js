export const HIDDEN_LANDING_KEY = 'hide_landing'

export class Landing{
    constructor(){
        this.landingHided = false
        this.image = document.querySelector('.egg .egg-wrapper')
        this.sectionWork = document.querySelector('section.work')
        this.header = document.querySelector('header')

        if (!this.shouldSkipLanding()) {
            document.addEventListener('scroll', this.render.bind(this))
            document.querySelector('section.landing').classList.add('show')
            this.render()
            this.preloadEggs()
        } else {
            document.querySelector('.preloading').classList.add('hide')
            document.querySelector('section.landing').classList.add('opacity')
            document.querySelector('header').classList.add('show')
            this.header.classList.add('black')
            this.header.classList.add('show')
        }

    }   

    preloadEggs(){
        let eggLoaded = 0
        
        const images = [
            'assets/img/egg1.png',
            'assets/img/egg2.png',
            'assets/img/egg3.png',
            'assets/img/egg4.png'
        ]
        
        images.forEach(img => {
            const image = new Image()
            image.onload = () => {
                eggLoaded++

                if (eggLoaded === 4) {
                    document.querySelector('.preloading').classList.add('hide')
                    document.querySelector('section.landing').classList.add('opacity')
                }
            }

            image.src = img
        })
    }

    shouldSkipLanding() {
        return !!localStorage.getItem(HIDDEN_LANDING_KEY)
    }

    render(){
        if (this.landingHided) return 

        const scrollPosition = window.scrollY
        const heightBody = window.innerHeight
            || document.documentElement.clientHeight
            || document.body.clientHeight;
        let imageIndex = Math.ceil(scrollPosition/heightBody*2) + 1

        if (imageIndex > 4) {
            imageIndex = 4
        }

        document.querySelector('.logo-1').classList.remove('show')
        document.querySelector('.logo-2').classList.remove('show')
        document.querySelector('.logo-3').classList.remove('show')
        document.querySelector('.logo-4').classList.remove('show')

        document.querySelector(`.logo-${imageIndex}`).classList.add('show')
        
        if (this.sectionWork.getBoundingClientRect().y <= 0) {
            this.hiddeLanding()
            this.header.classList.add('black')
        } else {
            this.header.classList.remove('black')
        }

        if (imageIndex >= 4) {
            const eggMarginTop = ((heightBody) - scrollPosition)/2
            this.image.style.marginTop = `${eggMarginTop}px`
            document.querySelector('header').classList.add('show')
            return 
        } else {
            document.querySelector('header').classList.remove('show')
        }

        

        
        this.image.style.marginTop = 0
    }

    hiddeLanding() {
        this.landingHided = true
        document.removeEventListener('scroll', this.render.bind(this))
        document.querySelector('section.landing').classList.remove('show')
        document.querySelector('header').classList.add('show')
    }
}