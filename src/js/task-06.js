const inputEl = document.querySelector('#validation-input');
const dataLength = Number(inputEl.getAttribute('data-length'));

const handleInputValidation = event => {
    if (event.target.value.length === dataLength) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else if (event.target.value.length === 0) {
        inputEl.classList.remove('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }
};

inputEl.addEventListener('blur', handleInputValidation);