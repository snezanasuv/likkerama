let mas=[ {'alt':"Гончарная мастерская \"Lik kerama\"", 'src':"img/1.jpg"}, {'alt':"Место, где вы можете отдохнуть и зарядиться энергией", 'src':"img/2.jpg"}, {'alt':"Место, где вы сможете прикоснуться к искусству", 'src':"img/3.jpg"}]; //массив с фотографиями для слайдера
let slide= document.body.querySelector('.slide'); //поиск контейнера для слайда
slide.style.backgroundImage='url("'+mas[0].src+'")'; //стилизация фонового изображения слайда
slide.innerHTML = mas[0].alt;
let dots = document.querySelectorAll('.dot'); //получение всех маркеров-индикаторов
let dotIndex=0; //номер текущего индикатора

function prev(){ //функция, переключающая слайд назад
    let prevNum=Number(slide.dataset.sequence)-1;
    dotIndex -=1;
    if(prevNum<0){
        prevNum=mas.length-1;
        dotIndex = dots.length-1;
    }
    slide.dataset.sequence = `${prevNum}`;
    slide.style.backgroundImage='url("'+mas[prevNum].src+'")';
    slide.innerHTML = mas[prevNum].alt;
    thisSlide(dotIndex);
}

function next(){ //функция, переключающая слайд вперед
    let nextNum=Number(slide.dataset.sequence)+1;
    dotIndex +=1;
    if(nextNum>mas.length-1){
        nextNum=0;
        dotIndex=0;
    }
    slide.dataset.sequence = `${nextNum}`;
    slide.style.backgroundImage='url("'+mas[nextNum].src+'")';
    slide.innerHTML = mas[nextNum].alt;
    thisSlide(dotIndex);
}

 
dots.forEach((dot, index)=>{ //функция, переключающая слайду по нажатию на кнопки
    dot.addEventListener('click', ()=>{
    slide.dataset.sequence = index;
    dotIndex = index;
    slide.style.backgroundImage = 'url("'+mas[index].src+'")';
    slide.innerHTML = mas[index].alt;
    thisSlide(dotIndex);
    })
})

let thisSlide = (index)=>{ //функция индикации маркера
    for (let dot of dots) {
        dot.classList.remove('active');
    }
    dots[index].classList.add('active');
}

setInterval(()=>{next()}, 5500); //добавление автоматического переключения слайда по времени


