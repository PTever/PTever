globalThis.flag = new Array([false, false, false, false]);

const inputPhoneNum = document.querySelector("input[name=mobileNumber]");
const certificationBtn = document.querySelector(".certification-Btn");

// 휴대폰 번호 입력시 인증번호 전송 버튼 disabled 사라지게 하는 js
inputPhoneNum.addEventListener("keyup", (e) => {
    if(!e.target.value){
        globalThis.flag[0] = false;
    } else {
        globalThis.flag[0] = true;
    }
    if(globalThis.flag[0]){
        certificationBtn.disabled = false;
    } else{
        certificationBtn.disabled = true;
    }
});


const inputCertificationNum = document.querySelector("input[name=verificationCode]");
const certificationBtn2 = document.querySelector(".certification-Btn2"); 


inputCertificationNum.addEventListener("keyup", (e) => {
    if(!e.target.value){
        globalThis.flag[0] = false;
    } else {
        globalThis.flag[0] = true;
    }
    if(globalThis.flag[0]){
        certificationBtn2.disabled = false;
    } else{
        certificationBtn2.disabled = true;
    }
});


// 모두 동의 체크 js 만든 후 닉네임 , 휴대폰 번호 입력 후 인증하기 까지 완료 해서 true로 바꾼다음 모두동의 or 동의까지 true &&이 true가 되면 모두 동의하고 가입하기 버튼 disabled 사라지게



// 반응형

const inputPhoneNumMobile = document.querySelector(".form_InputPhoneNum-mobile");
const certificationBtnMobile = document.querySelector(".certification-Btn-mobile");

// 휴대폰 번호 입력시 인증번호 전송 버튼 disabled 사라지게 하는 js
inputPhoneNumMobile.addEventListener("keyup", (e) => {
    if(!e.target.value){
        globalThis.flag[1] = false;
    } else {
        globalThis.flag[1] = true;
    }
    if(globalThis.flag[1]){
        certificationBtnMobile.disabled = false;
    } else{
        certificationBtnMobile.disabled = true;
    }
});

const inputCertificationNumMobile = document.querySelector(".form_InputCheckNum-mobile");
const certificationBtn2Mobile = document.querySelector(".certification-Btn2-mobile"); 


inputCertificationNumMobile.addEventListener("keyup", (e) => {
    if(!e.target.value){
        globalThis.flag[1] = false;
    } else {
        globalThis.flag[1] = true;
    }
    if(globalThis.flag[1]){
        certificationBtn2Mobile.disabled = false;
    } else{
        certificationBtn2Mobile.disabled = true;
    }
});



// 모두 동의
NodeList.prototype.map = Array.prototype.map;

// 전체 동의를 완성하라.
const all = document.querySelector("input[name=check-All]");
const terms = document.querySelectorAll("input[name=check]");

all.addEventListener("click", () => {
  terms.forEach((term) => {
    term.checked = all.checked;
  });

});

terms.forEach((term) => {
  term.addEventListener("click", (e) => {
    all.checked =
      terms.map((term) => term.checked).filter((checked) => checked)
        .length == 3;
  });
});

// 반응형

// 모두 동의
NodeList.prototype.map = Array.prototype.map;

// 전체 동의를 완성하라.
const allMobile = document.querySelector("input[name=check-All-mobile]");
const termsMobile = document.querySelectorAll("input[name=check-mobile]");

allMobile.addEventListener("click", () => {
    termsMobile.forEach((term) => {
    term.checked = allMobile.checked;
  });

});

termsMobile.forEach((term) => {
  term.addEventListener("click", (e) => {
    allMobile.checked =
    termsMobile.map((term) => term.checked).filter((checked) => checked)
        .length == 3;
  });
});
