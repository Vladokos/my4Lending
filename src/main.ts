import './style.scss';
import './teplate.html';
import Swiper, { Navigation, Pagination } from 'swiper';


// header popup
let videoBtn = document.querySelector('.videon-btn');
let videoCloseBtn = document.querySelector('.close-button');
let videoPlayer = document.querySelector('video');
let videoPopup = document.getElementById('popupV');

videoBtn?.addEventListener('click', function () {
    videoPopup?.classList.add('active');
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = getScrollbarWidth();
});
videoCloseBtn?.addEventListener('click', function () {
    videoPopup?.classList.remove('active');
    document.body.style.overflow = 'visible';
    document.body.style.paddingRight = '0px';
    videoPlayer?.pause();
});

//scroll get size
function getScrollbarWidth() {

    // Creating invisible container
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll'; // forcing scrollbar to appear
    document.body.appendChild(outer);

    // Creating inner element and placing it in the container
    const inner = document.createElement('div');
    outer.appendChild(inner);

    // Calculating difference between container's full width and the child width
    const scrollbarWidth = outer.offsetWidth - inner.offsetWidth + 'px';

    // Removing temporary elements from the DOM
    outer.parentNode?.removeChild(outer);

    console.log(scrollbarWidth);

    return scrollbarWidth;

}
//scroll get size


// header popup

//slider
let catalogBlock = document.getElementsByClassName('catalog__block');
for (let i = 0; i < catalogBlock.length; i++) {
    if (i == 0 || i == 1) {
        catalogBlock[i].classList.add('visible');
    } else {
        catalogBlock[i].classList.add('clear');
    }

}
let checkSlideList = 0;//Проверяет номер стр. слайда
let slideOffsetAft = -780;
let slidesOffsetBef = 200;
Swiper.use([Navigation, Pagination]);
new Swiper('.catalog-items', {
    slidesPerGroup: 2,
    slidesOffsetBefore: slidesOffsetBef,
    slidesOffsetAfter: slideOffsetAft,
    spaceBetween: -630,
    grabCursor: true,
    navigation: {
        nextEl: '.next-slide',
        prevEl: '.prev-slide',
    },

    on: {
        slideNextTransitionStart: function () {
            checkSlideList += 2;
            for (let c = 0; c < catalogBlock.length; c++) {
                catalogBlock[c].classList.add('clear');// 1 и след. листам добавляется класс -clear-(прозрачные)
                if (c == checkSlideList) {
                    for (let i = checkSlideList; i < checkSlideList + 2; i++) {
                        catalogBlock[i].classList.remove('clear')//убирает у переключенного слайда класс -clear-
                        catalogBlock[i].classList.add('visible');//добавляет класс -visible- 
                    }
                    break;
                }
            }
        },
        slidePrevTransitionStart: function () {
            checkSlideList -= 2;
            for (let c = 0; c < catalogBlock.length; c++) {
                catalogBlock[c].classList.remove('clear');
                if (c == checkSlideList + 1) {// +1 нужен чтобы на старнице оба слайда были -visible-
                    for (let i = checkSlideList + 2; i < checkSlideList + 4; i++) {// +2 нужен чтобы два пред. слайда были -clear- А +4 чтобы цикл не затрагивал активные слайды
                        catalogBlock[i].classList.add('clear');//добавляет класс -clear-
                        catalogBlock[i].classList.remove('visible');//убираем класс -visible-
                    }
                    break;
                }
            }
        }
    },
});
//slider

//toggle

let blockItems = document.getElementsByClassName('toggle__item')
let blockTogle;
for (blockTogle = 0; blockTogle < blockItems.length; blockTogle++) {//Нахождение блоков переключателя 
    if (blockTogle == 0) {
        blockItems[blockTogle].classList.add('active');
    } else {
        blockItems[blockTogle].classList.add('clear');
    }
}


let oneBtnToggle = document.querySelector('.slide-btn-items__one');
let twoBtnToggle = document.querySelector('.slide-btn-items__two');
let thridBtnToggle = document.querySelector('.slide-btn-items__thrid');


oneBtnToggle?.classList.add('active');
oneBtnToggle?.addEventListener('click', function () {
    for (blockTogle = 0; blockTogle < blockItems.length; blockTogle++) {
        if (blockTogle == 0) {
            blockItems[blockTogle].classList.add('active');
            blockItems[blockTogle].classList.remove('clear');

            oneBtnToggle?.classList.add('active');
        } else {
            blockItems[blockTogle].classList.add('clear');
            blockItems[blockTogle].classList.remove('active');

            twoBtnToggle?.classList.remove('active');
            thridBtnToggle?.classList.remove('active');
        }

    }
});
twoBtnToggle?.addEventListener('click', function () {
    for (blockTogle = 0; blockTogle < blockItems.length; blockTogle++) {
        if (blockTogle == 1) {
            blockItems[blockTogle].classList.add('active');
            blockItems[blockTogle].classList.remove('clear');

            twoBtnToggle?.classList.add('active');
        } else {
            blockItems[blockTogle].classList.add('clear');
            blockItems[blockTogle].classList.remove('active');

            oneBtnToggle?.classList.remove('active');
            thridBtnToggle?.classList.remove('active');
        }
    }
});
thridBtnToggle?.addEventListener('click', function () {
    for (blockTogle = 0; blockTogle < blockItems.length; blockTogle++) {
        if (blockTogle == 2) {
            blockItems[blockTogle].classList.add('active');
            blockItems[blockTogle].classList.remove('clear');

            thridBtnToggle?.classList.add('active');
        } else {
            blockItems[blockTogle].classList.add('clear');
            blockItems[blockTogle].classList.remove('active');

            oneBtnToggle?.classList.remove('active');
            twoBtnToggle?.classList.remove('active');
        }
    }
});
//toggle

//slider combo
let comoboBlock = document.getElementsByClassName('slider-item');
for (let i = 0; i < comoboBlock.length; i++) {
    if (i == 0 || i == 1 || i == 2) {
        continue;
    } else {
        comoboBlock[i].classList.add('clear');
    }
}

let checkComboList = 0;//Проверяет номер стр. слайда
Swiper.use([Navigation, Pagination]);
new Swiper('.slider', {
    slidesPerGroup: 1,
    grabCursor: true,
    navigation: {
        nextEl: '.next-slide-combo',
        prevEl: '.prev-slide-combo',
    },

    on: {
        slideNextTransitionStart: function () {
            checkComboList += 3;//считает номер слайда
            for (let c = 0; c < comoboBlock.length; c++) {
                comoboBlock[c].classList.add('clear');// 1 и след. листам добавляется класс -clear-(прозрачные)
                if (c == checkComboList) {
                    for (let i = checkComboList; i < checkComboList + 3; i++) {
                        comoboBlock[i].classList.remove('clear')//убирает у переключенного слайда класс -clear-
                    }
                    break;
                }
            }
        },
        slidePrevTransitionStart: function () {
            checkComboList -= 3;
            for (let c = 0; c < comoboBlock.length; c++) {
                comoboBlock[c].classList.remove('clear');
                if (c == checkComboList + 2) {// +1 нужен чтобы на старнице оба слайда были -visible-
                    for (let i = checkComboList + 3; i < checkComboList + 4; i++) {// +2 нужен чтобы два пред. слайда были -clear- А +4 чтобы цикл не затрагивал активные слайды
                        comoboBlock[i].classList.add('clear');//добавляет класс -clear-
                        comoboBlock[i].classList.remove('visible');//убираем класс -visible-
                    }
                    break;
                }
            }
        }
    },
});
//slider combo
function changeWidth() {
    let a = document.getElementById('slider');
    if (a) {
        a.style.width = '1366px';
    }
}
window.setTimeout(changeWidth, 500);
