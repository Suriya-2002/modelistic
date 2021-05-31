const dropdownOption = document.querySelector('.dropdown__selected-option');

document.querySelector('.dropdown__list').addEventListener('click', event => {
    if (event.target.classList.contains('dropdown__option')) {
        dropdownOption.innerHTML = event.target.innerHTML;
    }
});
