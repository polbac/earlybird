export const HIDDEN_LANDING_KEY = 'hide_landing'
export class Landing{
    constructor(){
        this.image = document.querySelector('.egg img')
        this.sectionWork = document.querySelector('section.work')

        if (!this.shouldSkipLanding()) {
            document.addEventListener('scroll', this.render.bind(this))
            document.querySelector('section.landing').classList.add('show')
        }

        this.render()
    }   

    shouldSkipLanding() {
        return !!localStorage.getItem(HIDDEN_LANDING_KEY)
    }

    render(){
        const scrollPosition = window.scrollY
        const heightBody = window.innerHeight
            || document.documentElement.clientHeight
            || document.body.clientHeight;
        let imageIndex = Math.ceil(scrollPosition/heightBody*2) + 1

        if (imageIndex > 4) {
            imageIndex = 4
        }

        this.image.setAttribute('src', `assets/img/egg${imageIndex}.png`)
        
        if (this.sectionWork.getBoundingClientRect().y <= 0) {
            this.hiddeLanding()
        }

        if (imageIndex >= 4) {
            const eggMarginTop = ((heightBody) - scrollPosition)/2
            this.image.style.marginTop = `${eggMarginTop}px`
            return 
        }

        this.image.style.marginTop = 0
    }

    hiddeLanding() {
        document.removeEventListener('scroll', this.render.bind(this))
        document.querySelector('section.landing').classList.remove('show')
    }
}