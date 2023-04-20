const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const container = document.querySelector('.container')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length

let activeSlaideIndex = 0

sidebar.style.top = `-${(slidesCount - 1)*100}vh`

upBtn.addEventListener('click', () => {
    changeSlaide('up')
})

downBtn.addEventListener('click', () => {
    changeSlaide('down')
})


function changeSlaide(direction) {
    if(direction === 'up') {
        activeSlaideIndex++
        if (activeSlaideIndex === slidesCount) {
            activeSlaideIndex = 0
        } 
    } else if (direction === 'down') {
        activeSlaideIndex--
        if (activeSlaideIndex < 0) {
            activeSlaideIndex = slidesCount - 1
        }
    }

    const height = container.clientHeight

    mainSlide.style.transform = `translateY(-${activeSlaideIndex * height}px)`;

    sidebar.style.transform = `translateY(${activeSlaideIndex * height}px)`
}
