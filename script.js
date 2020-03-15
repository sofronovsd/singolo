document.querySelector('.header__navigation-panel').addEventListener('click', (event) => {
    const target = event.target;

    if (target.classList.contains('navigation-panel__text')) {
        document.querySelectorAll('.navigation-panel__text_active').forEach(item => {
            item.classList.remove('navigation-panel__text_active');
        });
        target.classList.add('navigation-panel__text_active');
    }
});


document.querySelector('.portfolio__filter').addEventListener('click', (event) => {
    const target = event.target;

    if (target.classList.contains('filter__button')) {
        document.querySelectorAll('.filter__button_active').forEach(item => {
            item.classList.remove('filter__button_active');
        });
        target.classList.add('filter__button_active');

        let imgArr = document.querySelectorAll('.grid__item');
        let grid = document.querySelector('.grid');
        for (let i = 0; i < imgArr.length - 1; i++) {
            grid.appendChild(imgArr[i]);
        }
    }

});

document.querySelector('.grid').addEventListener('click', (event) => {
    const target = event.target;

    if (target.classList.contains('grid__item')) {
        document.querySelectorAll('.grid__item_bordered').forEach(item => {
            item.classList.remove('grid__item_bordered');
        });
        target.classList.add('grid__item_bordered');
    }
});

let isDisplay = true;
const slider = document.querySelector('.slider');
const iphoneVertical = document.querySelector('.slider__iphone-vertical');
const iphoneHorizontal = document.querySelector('.slider__iphone-horizontal');
const iphoneLeft = document.querySelector('.slider__iphone-left');
const iphoneCenter = document.querySelector('.slider__iphone-center');
const iphoneRight = document.querySelector('.slider__iphone-right');

const sliderContent = document.querySelector('.slider__content');
let backgroundVertical = document.createElement('img');
backgroundVertical.setAttribute('src', 'assets/Background.png');
backgroundVertical.style.zIndex = '1000';
backgroundVertical.style.display = 'none';
backgroundVertical.style.position = 'absolute';
backgroundVertical.style.top = '213px';
backgroundVertical.style.left = '126px';
sliderContent.append(backgroundVertical);
let isVisibleVerticalBackground = false;

let backgroundHorizontal = document.createElement('img');
backgroundHorizontal.setAttribute('src', 'assets/Background.png');
backgroundHorizontal.style.zIndex = '1000';
backgroundHorizontal.style.display = 'none';
backgroundHorizontal.style.position = 'absolute';
backgroundHorizontal.style.top = '210px';
backgroundHorizontal.style.left = '558px';
backgroundHorizontal.style.transform = 'rotate(90deg)';
sliderContent.append(backgroundHorizontal);
let isVisibleHorizontalBackground = false;

const arrowClickHandler = () => {
    if (isDisplay) {
        isDisplay = false;
        slider.style.background = '#648BF0';
        slider.style.borderBottom = '#648BF0 6px solid';
        iphoneVertical.style.display = 'none';
        iphoneHorizontal.style.display = 'none';
        iphoneLeft.style.display = 'block';
        iphoneCenter.style.display = 'block';
        iphoneRight.style.display = 'block';
        backgroundVertical.style.display = 'none';
        backgroundHorizontal.style.display = 'none';
        isVisibleVerticalBackground = false;
        isVisibleHorizontalBackground = false;
    } else {
        isDisplay = true;
        slider.style.background = '#f06c64';
        slider.style.borderBottom = '#ea676b 6px solid';
        iphoneVertical.style.display = 'block';
        iphoneHorizontal.style.display = 'block';
        iphoneLeft.style.display = 'none';
        iphoneCenter.style.display = 'none';
        iphoneRight.style.display = 'none';
    }
};
document.querySelector('.slider__arrow_right').addEventListener('click', arrowClickHandler);
document.querySelector('.slider__arrow_left').addEventListener('click', arrowClickHandler);


iphoneVertical.addEventListener('click', () => {
    if (!isVisibleVerticalBackground) {
        isVisibleVerticalBackground = true;
        backgroundVertical.style.display = 'block';
    } else {
        isVisibleVerticalBackground = false;
        backgroundVertical.style.display = 'none';
    }
});

iphoneHorizontal.addEventListener('click', () => {
    if (!isVisibleHorizontalBackground) {
        isVisibleHorizontalBackground = true;
        backgroundHorizontal.style.display = 'block';
    } else {
        isVisibleHorizontalBackground = false;
        backgroundHorizontal.style.display = 'none';
    }
});

let form = document.querySelector('form');
form.onsubmit = (event) => {
    event.preventDefault();
    let elements = event.target.elements;
    let result = 'Письмо отправлено\n';

    let subjectValue = elements.subject.value;
    if (subjectValue.trim() === '') {
        result += 'Без темы\n';
    } else {
        result += `Тема: ${subjectValue}\n`;
    }

    let descriptionValue = elements.description.value;
    if (descriptionValue.trim() === '') {
        result += 'Без описания\n';
    } else {
        result += `Описание: ${descriptionValue}\n`;
    }
    alert(result);
};