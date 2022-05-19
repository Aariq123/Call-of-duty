const div = document.querySelector('.slider-container div div');
let width = div.parentElement.clientWidth / 200;

const left = document.querySelector('.fa-chevron-left');
const right = document.querySelector('.fa-chevron-right');
let counter = 0;

left.addEventListener('click', ()=>{
    counter++
    console.log(counter)
    if(counter > width -1 ){
        counter = 0
    }
    div.style.transition = 'all .3s ease';
    div.style.transform = `translateX(-${220*counter}px)`
})

right.addEventListener('click',()=>{
    counter--
    console.log(counter)
    if(counter < 0){
        counter = width -1;
    }
    div.style.transition = 'all .3s ease';
    div.style.transform = `translateX(-${220*counter}px)`
})

