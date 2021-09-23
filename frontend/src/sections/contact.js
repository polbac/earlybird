export class Contact{
    constructor() {
        this.sectionContact = document.querySelector('#contact-section')
        console.log(this.sectionContact)
        this.buttonContact = document.querySelector('.contact-nav')
        this.header = document.querySelector('header')
        this.buttonClose = this.sectionContact.querySelector('.close')

        this.buttonContact.addEventListener('click', this.toggle.bind(this))
        this.buttonClose.addEventListener('click', this.toggle.bind(this))
    }

    toggle(e) {
        e.preventDefault()
        if (this.sectionContact.classList.contains('open')) {
            this.sectionContact.classList.remove('open')
            if (document.querySelector('body').classList.contains('black')) {
                this.header.classList.remove('black')
            }

        } else {
            this.sectionContact.classList.add('open')
            this.header.classList.add('black')
        }
        
        document.querySelector('body').classList.toggle('prevent-scroll')
        return false
    }
}