document.querySelector('.header__navigation-panel').addEventListener('click', (event) => {
    const target = event.target;

    if (target.classList.contains('navigation-panel__text')) {
        document.querySelectorAll('.navigation-panel__text_active').forEach(item => {
            item.classList.remove('navigation-panel__text_active');
        });
        target.classList.add('navigation-panel__text_active');

        const text = target.innerHTML;
        switch (text) {
            case 'Home': {
                slider.scrollIntoView({behavior: "smooth"});
                break;
            }
            case 'Services': {
                window.scrollTo({top: serviceSection.offsetTop - 95, behavior: "smooth"});
                break;
            }
            case 'Portfolio': {
                window.scrollTo({top: portfolioSection.offsetTop - 95, behavior: "smooth"});
                break;
            }
            case 'About': {
                window.scrollTo({top: aboutSection.offsetTop - 95, behavior: "smooth"});
                break;
            }
            case 'Contact': {
                window.scrollTo({top: contactInfo.offsetTop - 95, behavior: "smooth"});
                break;
            }
            default: {
                window.scrollTo({top: 0, behavior: "smooth"});
            }
        }
    }
});


document.querySelector('.portfolio__filter').addEventListener('click', (event) => {
    const target = event.target;

    if (target.classList.contains('filter__button')) {
        document.querySelectorAll('.filter__button_active').forEach(item => {
            item.classList.remove('filter__button_active');
        });
        target.classList.add('filter__button_active');

        const imgArr = document.querySelectorAll('.grid__item');
        const grid = document.querySelector('.grid');
        grid.insertBefore(imgArr.item(imgArr.length - 1), imgArr.item(0));
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

const iphoneVertical = document.querySelector('.slider__iphone-vertical');
const iphoneHorizontal = document.querySelector('.slider__iphone-horizontal');

iphoneVertical.addEventListener('click', () => {
    const verticalBackground = document.querySelector('.slider__background');
    if (verticalBackground.classList.contains('slider__background_active')) {
        verticalBackground.classList.remove('slider__background_active');
    } else {
        verticalBackground.classList.add('slider__background_active');
    }
});

iphoneHorizontal.addEventListener('click', () => {
    const horizontalBackground = document.querySelector('.slider__background_horizontal');
    if (horizontalBackground.classList.contains('slider__background_active')) {
        horizontalBackground.classList.remove('slider__background_active');
    } else {
        horizontalBackground.classList.add('slider__background_active');
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

let slides = [];
slides = document.querySelectorAll('.slider__content');
let currentSlideIndex = 0;
let isEnabled = true;

const switchSlide = (index) => currentSlideIndex = (index + slides.length) % slides.length;

const nextSlide = (index) => {
    hideSlide('to-left');
    switchSlide(index + 1);
    showSlide('from-right');
};

const prevSlide = (index) => {
    hideSlide('to-right');
    switchSlide(index - 1);
    showSlide('from-left');
};

const hideSlide = (direction) => {
    isEnabled = false;
    const slide = slides[currentSlideIndex];
    slide.classList.add(direction);
    slide.addEventListener('animationend', function () {
        this.classList.remove('slider__content_active', direction);
    })
};

const showSlide = (direction) => {
    const slide = slides[currentSlideIndex];
    slide.classList.add('slider__content_next', direction);
    slide.addEventListener('animationend', function () {
        this.classList.remove('slider__content_next', direction);
        this.classList.add('slider__content_active');
        isEnabled = true;
    })
};

document.querySelector('.slider__arrow_right').addEventListener('click', () => {
    if (isEnabled) {
        nextSlide(currentSlideIndex);
    }
});

document.querySelector('.slider__arrow_left').addEventListener('click', () => {
    if (isEnabled) {
        prevSlide(currentSlideIndex);
    }
});

let form = document.querySelector('form');
form.onsubmit = (event) => {
    event.preventDefault();
    const elements = event.target.elements;
    let result = `Письмо отправлено<br>`;

    const subjectValue = elements.subject.value;
    if (subjectValue.trim() === '') {
        result += `Без темы<br>`;
    } else {
        result += `Тема: ${subjectValue}<br>`;
    }

    let descriptionValue = elements.description.value;
    if (descriptionValue.trim() === '') {
        result += `Без описания<br>`;
    } else {
        result += `Описание: ${descriptionValue}<br>`;
    }

    const dialog = document.querySelector('.modal-dialog');
    dialog.classList.add('modal-dialog_active');
    const dialogText = document.querySelector('.modal-dialog__text');
    dialogText.innerHTML = result;

    modalBtn.addEventListener('click', () => {
        dialog.classList.remove('modal-dialog_active');
        form.reset();
    })

};

const burgerMenu = document.querySelector('.burger-menu__icon');
burgerMenu.addEventListener('click', (event) => {
    const overlay = document.querySelector('.overlay');
    overlay.classList.add('overlay_active');
});

const burgerMenuActive = document.querySelector('.burger-menu_active');
burgerMenuActive.addEventListener('click', (event) => {
    const overlay = document.querySelector('.overlay');
    overlay.classList.remove('overlay_active');
});

document.querySelector('.side-menu__navigation').addEventListener('click', (event) => {
    const target = event.target;

    if (target.classList.contains('side-menu__navigation__text')) {
        document.querySelectorAll('.side-menu__navigation__text_active').forEach(item => {
            item.classList.remove('menu__navigation__text_active');
        });
        target.classList.add('menu__navigation__text_active');

        const text = target.innerHTML;
        switch (text) {
            case 'Home': {
                slider.scrollIntoView({behavior: "smooth"});
                break;
            }
            case 'Services': {
                window.scrollTo({top: serviceSection.offsetTop - 95, behavior: "smooth"});
                break;
            }
            case 'Portfolio': {
                window.scrollTo({top: portfolioSection.offsetTop - 95, behavior: "smooth"});
                break;
            }
            case 'About': {
                window.scrollTo({top: aboutSection.offsetTop - 95, behavior: "smooth"});
                break;
            }
            case 'Contact': {
                window.scrollTo({top: contactInfo.offsetTop - 95, behavior: "smooth"});
                break;
            }
            default: {
                window.scrollTo({top: 0, behavior: "smooth"});
            }
        }

        const overlay = document.querySelector('.overlay');
        overlay.classList.remove('overlay_active');
    }
});