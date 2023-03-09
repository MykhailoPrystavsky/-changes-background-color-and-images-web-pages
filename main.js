//bacground color
const GET_COLOR_BUTTON = document.querySelector('.color-button')
const GET_FIRST_HIDE = document.querySelector('.first-hide')

GET_COLOR_BUTTON.addEventListener('click',function(){
    GET_FIRST_HIDE.style.display = 'grid'
    document.body.style.backgroundColor = 'white'
    GET_SECOND_HIDE.style.display = 'none'
});

const BOX_1 = document.querySelector('.box-1');

BOX_1.addEventListener('click',function(event){
    // console.log(event.target);
    if(event.target.classList.contains('color-box')){
        document.body.style.background = getComputedStyle(event.target).backgroundColor;
    }
});


//bacground image

const GET_IMAGE_BUTTON = document.querySelector('.image-button')
const GET_SECOND_HIDE = document.querySelector('.second-hide')

GET_IMAGE_BUTTON.addEventListener('click',function(){
    GET_SECOND_HIDE.style.display = 'grid';
    document.body.style.backgroundColor = 'Turquoise';
    GET_FIRST_HIDE.style.display = 'none';
});

const BOX_2 = document.querySelector('.box-2');

BOX_2.addEventListener('click',function(image){
    // console.log(event.target);
    if(image.target.classList.contains('image-box')){
        document.body.style.backgroundSize = 100 + '%';
        document.body.style.backgroundImage = getComputedStyle(image.target).backgroundImage;
    }
});

