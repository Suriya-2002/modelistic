const popUp = document.querySelector('.pop-up');

document.querySelector('.dropdown__list').addEventListener('click', event => {
    if (event.target.classList.contains('dropdown__option')) {
        document.querySelector('.dropdown__selected-option').innerHTML = event.target.innerHTML;
    }
});

document.querySelector('.model-cards').addEventListener('click', event => {
    if (event.target.classList.contains('button--model-card')) {
        popUp.classList.add('pop-up--active');
    }
});

document.querySelector('.pop-up__overlay').addEventListener('click', () => {
    popUp.classList.remove('pop-up--active');
});

document.querySelector('.button--pop-up').addEventListener('click', () => {
    popUp.classList.remove('pop-up--active');
});
