export class Contact{
    constructor() {
        this.sectionContact = document.querySelector('#contact-section')
        console.log(this.sectionContact)
        this.buttonContact = document.querySelector('.contact-nav')
        this.buttonClose = this.sectionContact.querySelector('.close')

        this.buttonContact.addEventListener('click', this.toggle.bind(this))
        this.buttonClose.addEventListener('click', this.toggle.bind(this))
    }

    toggle(e) {
        e.preventDefault()
        this.sectionContact.classList.toggle('open')
        document.querySelector('body').classList.toggle('prevent-scroll')
        return false
    }
}