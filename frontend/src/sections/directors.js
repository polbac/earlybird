export class Directors{
    constructor() {
        document.querySelectorAll('.directors-list a').forEach(item => {
            item.addEventListener('mouseenter', this.mouseEnter)
        })
    }

    mouseEnter() {
        document.querySelectorAll('.directors-list a').forEach(item => {
            item.classList.remove('active')
        })
        this.classList.add('active')
        document.querySelector('.photo img').setAttribute(
            'src',
            this.getAttribute('data-image')
        )
    }
   
}