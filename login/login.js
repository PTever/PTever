globalThis.flag = false;

const inputId = document.querySelector("input[name=email]");
const inputPassword = document.querySelector("input[name=password]");
const loginBtn = document.querySelector(".login-Btn");

inputId.addEventListener("keyup", (e) => {
    if(!e.target.value || !inputPassword.value){
        globalThis.flag = false;
    } else {
        globalThis.flag = true;
    }
    if(globalThis.flag){
        loginBtn.disabled = false;
    } else{
        loginBtn.disabled = true;
    }
});

inputPassword.addEventListener("keyup", (e) => {
    if(!e.target.value || !inputId.value){
        globalThis.flag = false;
    } else {
        globalThis.flag = true;
    }
    if(globalThis.flag){
        loginBtn.disabled = false;
    } else {
        loginBtn.disabled = true;
    }
});