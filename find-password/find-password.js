globalThis.flag = false;

const inputId = document.querySelector("input[name=email]");
const sendMailBtn = document.querySelector(".send-Email-Btn");

inputId.addEventListener("keyup", (e) => {
    if (!e.target.value) {
        globalThis.flag = false;
    } else {
        globalThis.flag = true;
    }
    if (globalThis.flag) {
        sendMailBtn.disabled = false;
    } else {
        sendMailBtn.disabled = true;
    }
});

function handleResize() {
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
        sendMailBtn.classList.add("mobile");
    } else {
        sendMailBtn.classList.remove("mobile");
    }
}

window.addEventListener("resize", handleResize);
handleResize();