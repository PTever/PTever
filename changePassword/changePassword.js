globalThis.flag = false;

const inputId = document.querySelector("input[name=email]");
const inputPassword = document.querySelector("input[name=password]");
const correctDescription = document.querySelector("input[name=passwordConfirm]");
const changeButton = document.querySelector(".correct-RegisterPage-Submit-Btn");

inputId.addEventListener("keyup", (e) => {
    if(!e.target.value || !inputPassword.value || !correctDescription.value){
        globalThis.flag = false;
    } else {
        globalThis.flag = true;
    }
    if(globalThis.flag){
        changeButton.disabled = false;
    } else{
        changeButton.disabled = true;
    }
});

inputPassword.addEventListener("keyup", (e) => {
    if(!e.target.value || !inputId.value || !correctDescription.value){
        globalThis.flag = false;
    } else {
        globalThis.flag = true;
    }
    if(globalThis.flag){
        changeButton.disabled = false;
    } else {
        changeButton.disabled = true;
    }
});


correctDescription.addEventListener("keyup", (e) => {
    if(!e.target.value || !inputPassword.value || !inputId.value){
        globalThis.flag = false;
    } else {
        globalThis.flag = true;
    }
    if(globalThis.flag){
        changeButton.disabled = false;
    } else {
        changeButton.disabled = true;
    }
});

