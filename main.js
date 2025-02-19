const burgerMenu = document.querySelector('.burger-menu')
const nav = document.querySelector('.header-nav')


let isOpen = false
burgerMenu.addEventListener('click', () => {
    isOpen = !isOpen

    if(isOpen === false){
       nav.classList.add('isopen')
    }else{
        nav.classList.remove('isopen')
    }
})