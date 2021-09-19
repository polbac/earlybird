const ALL = 'all'

export class Work{
    constructor(){
       this.container = document.querySelector('section.work')
       this.workItems = document.querySelectorAll('section.work .item')
       this.categoryItems = document.querySelectorAll(`section.work .categories a`)
       
       const search = document.location.search
       const urlParams = new URLSearchParams(search)
       this.currentCategory = urlParams.get('category') || ALL

       this.addInteractions()
       this.filter()
    }   

    addInteractions(){
        const items = this.container.querySelectorAll('.categories a')

        for (const item of items) {
            item.addEventListener('click', this.clickCategory.bind(this))
        }
            
    }

    clickCategory(e) {
        e.preventDefault()
        this.currentCategory = e.currentTarget.getAttribute('data-category')
        history.pushState({}, null, `?category=${this.currentCategory}`)
        this.filter()
    }

    filter() {

        for (const categoryItem of this.categoryItems) {
            categoryItem.classList.remove('active')
            if (categoryItem.getAttribute('data-category') === this.currentCategory) {
                categoryItem.classList.add('active')
            }
        }

        for (const item of this.workItems) {
            const itemCategories = item.getAttribute('data-catagories').split(',')

            if (itemCategories.includes(this.currentCategory) || this.currentCategory === ALL) {
                item.classList.remove('hidden')
            } else {
                item.classList.add('hidden')
            }
        }
    }

}