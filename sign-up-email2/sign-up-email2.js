NodeList.prototype.map = Array.prototype.map;

globalThis.flag = new Array([false, false, false, false]);

const inputNickName = document.querySelector("input[name=nickname]");
const inputPhoneNum = document.querySelector("input[name=mobileNumber]");
const certificationBtn = document.querySelector(".certification-Btn");
const inputCertificationNum = document.querySelector("input[name=verificationCode]");
const certificationBtn2 = document.querySelector(".certification-Btn2"); 
const allAgreeBtn = document.querySelector(".agreement-Btn");
const inputPhoneNumMobile = document.querySelector(".form_InputPhoneNum-mobile");
const certificationBtnMobile = document.querySelector(".certification-Btn-mobile");
const inputCertificationNumMobile = document.querySelector(".form_InputCheckNum-mobile");
const certificationBtn2Mobile = document.querySelector(".certification-Btn2-mobile"); 
const all = document.querySelector("input[name=check-All]");
const terms = document.querySelectorAll("input[name=check]");
const allMobile = document.querySelector("input[name=check-All-mobile]");
const termsMobile = document.querySelectorAll("input[name=check-mobile]");
// 모든 입력 필드 요소를 선택합니다.


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


// 반응형

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

// 전체 동의를 완성하라.

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

// 전체 동의를 완성하라.

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



// 모두 동의 체크 js 만든 후 닉네임 , 휴대폰 번호 입력 후 인증하기 까지 완료 해서 true로 바꾼다음 모두동의 or 동의까지 true &&이 true가 되면 모두 동의하고 가입하기 버튼 disabled 사라지게

// if(!inputNickName.value || !inputPhoneNum.value || !inputCertificationNum.value) {
//     terms.forEach((term) => {
//         term.checked != all.checked;
//     })
//     globalThis.flag[3] = false;
// } else {
//     globalThis.flag[3] = true;
// }
// if(globalThis.flag[2] && globalThis.flag[3]) {
//     allAgreeBtn.disabled = false;
// } else {
//     allAgreeBtn.disabled = true;
// }



