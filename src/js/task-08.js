const formEl = document.querySelector('.login-form');
console.log(formEl);

formEl.addEventListener("sumbit", handleSumbitLoginForm);

function handleSumbitLoginForm(event) {
    event.preventDefault();
    // console.log(elements); 
    
    const {
        elements: { login, password }
    } = event.currentTurget;

if (login.value === '' || password.value === '') { 
    alert("All fields must be filled");
} 

console.log(`Login: ${login.value}, Password: ${password.value}`);
event.currentTarget.reset();
}