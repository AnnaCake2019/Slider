const go = document.getElementById('go');
const slider = document.querySelector('.slider');
const open = document.querySelector('.open');
go.addEventListener('click', () => {
    setTimeout(() =>{
        slider.classList.remove('showSlider');
        open.classList.add('showSlider');
    }, 5000)

});



const img = document.getElementsByClassName('d-block');
const act = document.getElementById('act');
window.addEventListener('resize', () => {
    const body = document.body.offsetWidth;
    if (body < 600) {
        act.innerText = 'Тест на внимптельность)';
        for (let i = 0; i < img.length; i++) {
            img[i].removeAttribute('src');
            img[i].setAttribute('src', `img/slider_${i + 1}min.jpg`)
        }
    } else {
        act.innerText = 'Акция действует до 01.02.2000';
        for (let i = 0; i < img.length; i++) {
            img[i].removeAttribute('src');
            img[i].setAttribute('src', `img/slider_${i + 1}.jpg`)
        }
    }
});


