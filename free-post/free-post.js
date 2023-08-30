const buttons = document.querySelectorAll('.footerButton');
let currentButton = document.querySelector('.ButtonPage_StyledButtonOn');
const prevButtons = document.querySelectorAll('.PaginationButtonGroup_PrevButtonWrapper button');
const nextButtons = document.querySelectorAll('.PaginationButtonGroup_NextButtonWrapper button');
const firstButton = document.querySelectorAll('.PaginationButtonGroup_PrevButtonWrapper button img');
const lastButton = document.querySelectorAll('.PaginationButtonGroup_NextButtonWrapper button img');
const prev_button = document.getElementById('prev_button');
const prevprev_button = document.getElementById('prevprev_button');
const next_button = document.getElementById('next_button');
const nextnext_button = document.getElementById('nextnext_button');



buttons.forEach(button => {
  button.addEventListener("click", function () {
    if (this === currentButton) {
      // 이미 선택된 버튼을 다시 클릭한 경우, 아무 작업도 하지 않음
    } else {
      buttons.forEach(e => {
        offchange(e);
      });

      onchange(this);
      middlePoint();
      



      if (this === buttons[0]) {
        firstPoint();
        
      } else if (this === buttons[buttons.length - 1]) {
        lastPoint();
      }

      currentButton = this; // 선택된 버튼 업데이트
    }
  });
});


next_button.addEventListener("click", function() {
  let currentIndex = Array.from(buttons).indexOf(currentButton);

  if (currentIndex < buttons.length - 1) {
    middlePoint();
    offchange(currentButton);
    currentButton = buttons[currentIndex + 1];
    onchange(currentButton);
  } else if (currentIndex === buttons.length - 1) {
    lastPoint();
    offchange(currentButton);
    onchange(buttons[currentIndex]);
  }
});




nextnext_button.addEventListener("click", function(){
  offchange(currentButton);
  currentButton = buttons[buttons.length-1];
  onchange(currentButton);
  lastPoint();
});

prev_button.addEventListener("click", function() {
  let currentIndex = Array.from(buttons).indexOf(currentButton);
  if (currentIndex > 1) { // 버튼 인덱스가 0보다 큰 경우에만 동작
    middlePoint();
    offchange(currentButton);
    currentButton = buttons[currentIndex - 1];
    onchange(currentButton);
  } else if (currentIndex === 1) { // 버튼 인덱스가 0인 경우에 firstPoint로 설정
    firstPoint();
    offchange(currentButton);
    currentButton = buttons[currentIndex - 1]; // 인덱스 -1은 유효하지 않음
    onchange(currentButton);
  }
});


prevprev_button.addEventListener("click", function() {
  offchange(currentButton);
  currentButton = buttons[0];
  firstPoint();
  onchange(currentButton);
});

function offchange(button) {
  button.classList.remove('ButtonPage_StyledButtonOn');
  button.classList.add('ButtonPage_StyledButton');
}

function onchange(button) {
  button.classList.remove('ButtonPage_StyledButton');
  button.classList.add('ButtonPage_StyledButtonOn');
}


// 화살표 버튼 on/off
function middlePoint(){
  prev_button.removeAttribute('disabled')
  prevprev_button.removeAttribute('disabled')
  for(let i=0; i<firstButton.length; i++){
    if(i==0){
      firstButton[i].src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E %3Cg fill='none' fill-rule='evenodd'%3E %3Crect width='40' height='40' fill='%23FFF' fill-opacity='0' fill-rule='nonzero' rx='20'/%3E %3Cg stroke='%23000' stroke-width='1.5'%3E %3Cpath d='M16 16l4 4-4 4M21 16l4 4-4 4'/%3E %3C/g%3E %3C/g%3E %3C/svg%3E";
      lastButton[i+1].src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E %3Cg fill='none' fill-rule='evenodd'%3E %3Crect width='40' height='40' fill='%23FFF' fill-opacity='0' fill-rule='nonzero' rx='20'/%3E %3Cg stroke='%23000' stroke-width='1.5'%3E %3Cpath d='M16 16l4 4-4 4M21 16l4 4-4 4'/%3E %3C/g%3E %3C/g%3E %3C/svg%3E";
    } else{
      firstButton[i].src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18'%3E %3Cg fill='none' fill-rule='evenodd'%3E %3Cpath d='M18 0H0v18h18z'/%3E %3Cpath stroke='%23000' stroke-width='1.5' d='M7 5l4 4-4 4'/%3E %3C/g%3E %3C/svg%3E";
      lastButton[i-1].src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18'%3E %3Cg fill='none' fill-rule='evenodd'%3E %3Cpath d='M18 0H0v18h18z'/%3E %3Cpath stroke='%23000' stroke-width='1.5' d='M7 5l4 4-4 4'/%3E %3C/g%3E %3C/svg%3E";
    }
  }
}

function firstPoint(){
  for(let i=0; i<firstButton.length; i++){
    if(i==0){
      firstButton[i].src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E %3Cg fill='none' fill-rule='evenodd'%3E %3Cpath fill='%23FFF' fill-opacity='0' fill-rule='nonzero' d='M0 0h40v40H0z'/%3E %3Cpath stroke='%23DDD' stroke-width='1.5' d='M16 16l4 4-4 4M21 16l4 4-4 4'/%3E %3C/g%3E %3C/svg%3E";
      lastButton[i+1].src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E %3Cg fill='none' fill-rule='evenodd'%3E %3Crect width='40' height='40' fill='%23FFF' fill-opacity='0' fill-rule='nonzero' rx='20'/%3E %3Cg stroke='%23000' stroke-width='1.5'%3E %3Cpath d='M16 16l4 4-4 4M21 16l4 4-4 4'/%3E %3C/g%3E %3C/g%3E %3C/svg%3E";
    } else{
      firstButton[i].src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E %3Cg fill='none' fill-rule='evenodd'%3E %3Cpath fill='none' d='M0 0h40v40H0z'/%3E %3Cpath stroke='%23DDD' stroke-width='1.5' d='M18 16l4 4-4 4'/%3E %3C/g%3E %3C/svg%3E";
      lastButton[i-1].src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18'%3E %3Cg fill='none' fill-rule='evenodd'%3E %3Cpath d='M18 0H0v18h18z'/%3E %3Cpath stroke='%23000' stroke-width='1.5' d='M7 5l4 4-4 4'/%3E %3C/g%3E %3C/svg%3E";
    }
  }
}

function lastPoint(){
  prev_button.removeAttribute('disabled')
  prevprev_button.removeAttribute('disabled')
  console.log(prev_button)
  console.log(prevprev_button)
  for(let i=0; i<firstButton.length; i++){
    if(i==0){
      firstButton[i].src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E %3Cg fill='none' fill-rule='evenodd'%3E %3Crect width='40' height='40' fill='%23FFF' fill-opacity='0' fill-rule='nonzero' rx='20'/%3E %3Cg stroke='%23000' stroke-width='1.5'%3E %3Cpath d='M16 16l4 4-4 4M21 16l4 4-4 4'/%3E %3C/g%3E %3C/g%3E %3C/svg%3E";
      lastButton[i+1].src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E %3Cg fill='none' fill-rule='evenodd'%3E %3Cpath fill='%23FFF' fill-opacity='0' fill-rule='nonzero' d='M0 0h40v40H0z'/%3E %3Cpath stroke='%23DDD' stroke-width='1.5' d='M16 16l4 4-4 4M21 16l4 4-4 4'/%3E %3C/g%3E %3C/svg%3E";
    } else{
      firstButton[i].src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18'%3E %3Cg fill='none' fill-rule='evenodd'%3E %3Cpath d='M18 0H0v18h18z'/%3E %3Cpath stroke='%23000' stroke-width='1.5' d='M7 5l4 4-4 4'/%3E %3C/g%3E %3C/svg%3E";
      lastButton[i-1].src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E %3Cg fill='none' fill-rule='evenodd'%3E %3Cpath fill='none' d='M0 0h40v40H0z'/%3E %3Cpath stroke='%23DDD' stroke-width='1.5' d='M18 16l4 4-4 4'/%3E %3C/g%3E %3C/svg%3E";
    }
  }
}

