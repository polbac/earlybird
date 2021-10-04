export class Contact{
    constructor() {
        this.ENDPOINT = '/mail-contact'
        this.sectionContact = document.querySelector('#contact-section')
        this.buttonSend = document.querySelector('#contact-section .send-button')
        
        this.buttonContact = document.querySelector('.contact-nav')
        this.header = document.querySelector('header')
        this.buttonClose = this.sectionContact.querySelector('.close')

        this.buttonContact.addEventListener('click', this.toggle.bind(this))
        this.buttonClose.addEventListener('click', this.toggle.bind(this))
        this.buttonSend.addEventListener('click', this.send.bind(this))
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

            document.querySelector('header').classList.remove('mobile-open')
        }
        
        document.querySelector('body').classList.toggle('prevent-scroll')
        return false
    }

    send(e) {
        e.preventDefault()
        
        const emailInput = document.querySelector('#email-field')

        fetch(this.ENDPOINT, {
            method: 'POST',
            body: JSON.parse({emailInput})
        })

        return false
    }
}