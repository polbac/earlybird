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
        document.querySelector('#contact-error').style.display = 'none'
        const emailInput = document.querySelector('#email-field').value

        /* fetch(this.ENDPOINT, {
            method: 'POST',
            body: JSON.parse({emailInput})
        })
        .then(success => { */
            document.querySelector('.form-contact').style.display = 'none'
            document.querySelector('#contact-success').style.display = 'block'
        /* })
        .catch(error => {
            document.querySelector('#contact-error').style.display = 'block'
        }) */

        return false
    }
}