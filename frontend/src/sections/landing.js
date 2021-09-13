export class Landing{
    constructor(){
        document.addEventListener('scroll', this.render.bind(this))
        this.image = document.querySelector('.egg img')
        this.render()
    }   

    render(){
        const scrollPosition = window.scrollY
        const heightBody = window.innerHeight
            || document.documentElement.clientHeight
            || document.body.clientHeight;
        const imageIndex = Math.ceil(scrollPosition/heightBody) + 1

        this.image.setAttribute('src', `assets/img/egg${imageIndex}.png`)
        if (imageIndex >= 4) {
            
            const eggMarginTop = ((heightBody * 2) - scrollPosition)/6
            console.log(eggMarginTop)
            this.image.style.marginTop = `${eggMarginTop}px`
            return 
        }

        this.image.style.marginTop = 0
        
    }
}