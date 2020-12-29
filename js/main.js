$('.presentation__btn-right').click(function (){
   $('.presentation__first-img').css('z-index', '1');
   // alert('hi');
});
$('.presentation__btn-left').click(function (){
   $('.presentation__first-img').css('z-index', '7');
   // alert('hi');
});











////////////////////////SCROLL START////////////////////////
$('#aboutTheater__tittle, #aboutTheater__tittle1').click(function(){
   var offset = 0;
   $('html, body').animate ({
      scrollTop: $('.aboutTheater__tittle').offset ().top - offset
   }, 600);
    $('.menu-burger').css('display', 'none');
      return false;
   });

$('#staging__tittle, #staging__tittle1').click(function(){
   var offset = 0;
   $('html, body').animate ({
      scrollTop: $('.staging__tittle').offset ().top - offset
   }, 600);
    $('.menu-burger').css('display', 'none');
         return false;
   });

$('#partners__tittle, #partners__tittle1').click(function(){
   var offset = 0;
   $('html, body').animate ({
      scrollTop: $('.partners__tittle').offset ().top - offset
   }, 600);
    $('.menu-burger').css('display', 'none');
      return false;
   });

$('#maecenas__tittle, #maecenas__tittle1').click(function(){
   offset = 0;
   $('html, body').animate ({
      scrollTop: $('.maecenas__tittle').offset ().top - offset
   }, 600);
    $('.menu-burger').css('display', 'none');
      return false;
   });
////////////////////////SCROLL END///////////////////////////

// /////////////////////Slider start//////////////////////////////
//let slides = $('.slide-single');
//console.log(slides);
//let slider = [];
//for (let i=0; i<slides.length; i++) {
//    slider[i] = slides[i].src;
//    slides[i].remove();
//}
//console.log(slider);
//
//let step = 0;
//let offset = 0;
//
//function draw () {
//    let img = document.createElement('img');
//    img.src = slider[step];
//    img.classList.add('slide-single');
//    img.style.left = offset * 442 +'px';
//    document.querySelector('#slide').appendChild(img); 
//    if (step + 1==slider.length) {
//        step=0;
//    } else {
//        step++;
//    }
//    offset++;
//}
//function left () {
//    document.onclick = null;
//    let slides2 = $('.slide-single');
//    let offset2 = 0;
//    for (let i=0; i<slides2.length; i++) {
//        slides2[i].style.left = offset2 * 442 - 442 +'px';
//        offset2++;
//    }
//    setTimeout(function(){
//        slides2[0].remove();
//        draw();
//        document.onclick = left;
//    }, 1000)
//}
//
//draw();
//draw();
//draw();
//draw();
//$('.slider__button-left').click(left);

let position = 0;
let slidesToShow = proverka();
const slidesToScroll = 1;
const container = $('.slider-container');
const track = $('.slider-track');
const item = $('.slider-item');

const btnPrev = $('.btn-prev');
const btnNext = $('.btn-next');
const itemWidth = container.width() / slidesToShow;
const movePosition = slidesToScroll * itemWidth;
const itemCount = item.length;

function proverka() {
    win_w = $(document).width();
    if (win_w > 1200-18){
        slidesToShoW = 3;
    } else if (win_w <=1200-18 && win_w >= 992-18){
        slidesToShoW = 2;
    } else if (win_w <=992-18){
        slidesToShoW = 1;
    }
    return slidesToShoW;
    width();
}
    console.log('показывать слайдов: '+slidesToShow);
function width () {
    if (slidesToShow = 3) {
        $('.wrapper').css('width', '1320px');
    } else if (slidesToShow = 2) {
        $('.wrapper').css('width', '880px');
    } else if (slidesToShow = 1) {
        $('.wrapper').css('width', '440px');
    }
}



item.each(function(index, item){
    $(item).css({
       minWidth: itemWidth, 
    });
});

btnNext.click(function(){
    const itemsLeft = itemCount - (Math.abs(position) + slidesToShow*itemWidth) / itemWidth;
    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft*itemWidth;
    setPosition();
    checkBtn();
});

btnPrev.click(function(){
    const itemsLeft = Math.abs(position) / itemWidth;
    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft*itemWidth;
    setPosition();
    checkBtn();
});

const setPosition = () => {
    track.css({
       transform: `translateX(${position}px)`
    });
};
const checkBtn = () => {
    btnPrev.prop('disabled', position === 0);
    btnNext.prop('disabled', 
        position <= -(itemCount-slidesToShow)*itemWidth
        );
    };  
checkBtn();







// /////////////////////Slider end//////////////////////////////



////////////////скрыть или раскрыть ПАРТНЕРОВ/////////////
$('.partners__button-max').click(function (){
    win_w = $(document).width();
    console.log(win_w);
    if (win_w <= 1200-18 && win_w >= 768-18) {
        $('.hide2').addClass('dispaly-block');
    } else {
        $('.hide2, .hide1').addClass('dispaly-block');
    }
        $('.partners__button-min').addClass('dispaly-inline-block');
});

$('.partners__button-min').click(function (){
    win_ww = $(document).width();
    console.log("111: "+win_ww);
    if (win_ww <= 1200-17 && win_w >= 768-17) {
        $('.hide2').removeClass('dispaly-block');
    } else {
        $('.hide2, .hide1').removeClass('dispaly-block');
    }
    $('.partners__button-min').removeClass('dispaly-inline-block');
});
////////////////скрыть или раскрыть ПАРТНЕРОВ/////////////






/////////////////////////открыть или закрыть MENU_LEFT////////////
$('.close').click(function (){
    $('.menu-burger').css('display', 'none');
    $('.header__menu-burger').css('z-index', '999')
});

$('.header__menu-burger').click(function (){
    $('.menu-burger').css('display', 'block');
    $('.header__menu-burger').css('z-index', '0')
});
/////////////////////////открыть или закрыть MENU_LEFT////////////
















