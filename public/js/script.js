const popUp = document.querySelector('.pop-up');

document.querySelector('.dropdown__list').addEventListener('click', event => {
    if (event.target.classList.contains('dropdown__option')) {
        document.querySelector('.dropdown__selected-option').innerHTML = event.target.innerHTML;
    }
});

document.querySelector('.model-cards').addEventListener('click', event => {
    if (event.target.classList.contains('model-card__button')) {
        popUp.classList.add('pop-up--active');
    }
});

document.querySelector('.pop-up__overlay').addEventListener('click', () => {
    popUp.classList.remove('pop-up--active');
});

document.querySelector('.pop-up__button').addEventListener('click', () => {
    popUp.classList.remove('pop-up--active');
});
