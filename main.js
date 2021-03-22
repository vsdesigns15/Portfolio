const menuBtn = document.querySelector('.nav-trigger');
const menu = document.querySelector('.menu')
const menuClose = document.querySelector('.menu__close')
const body = document.body

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('menu-open')
    menu.classList.toggle('is-open')
    body.classList.add('overflow')
});

menuClose.addEventListener('click', () => {
    menu.classList.remove('is-open')
    menuBtn.classList.remove('menu-open')
    body.classList.remove('overflow')
})

// project preview
const previewModal = document.querySelector('.project-preview-modal')
const previewModalImage = previewModal.querySelector('img')
const previewProjectButtons = document.querySelectorAll('.project-preview-button')

previewProjectButtons.forEach((element) => {
    element.addEventListener('click', ($event) => {
        $event.preventDefault()
        const imageUrl = element.getAttribute('href')
        previewModalImage.setAttribute('src', imageUrl)
        previewModal.classList.add('is-open')
        body.classList.add('overflow')
    })
})

document.querySelector('.project-preview-close').addEventListener('click', () => {
    previewModal.classList.remove('is-open')
    body.classList.remove('overflow')
})