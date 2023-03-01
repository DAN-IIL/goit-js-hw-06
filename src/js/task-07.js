const inputFontSize = document.querySelector('#font-size-control');
const textInput = document.querySelector('#text');

inputFontSize.addEventListener('input', handleInputGange);

function handleInputGange(event) {
    textInput.style.fontSize = event.currentTarget.value + 'px';
};