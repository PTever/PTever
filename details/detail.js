const button = document.getElementsByClassName("like_Button");
const likeImage = button[0].querySelector("img"); // 이미지 엘리먼트 선택
const count = button[0].querySelector("span");
const commentForm = document.getElementById('commentForm');
const cancelButton = commentForm.querySelector('.cancel');

const commentButtom = document.getElementsByClassName('ButtonWrite');

let clickCount= parseInt(count.textContent);
button[0].addEventListener("click", function(){
  likeImage.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E %3Cg fill='none' fill-rule='evenodd'%3E %3Cpath fill='none' d='M0 0h24v24H0z'/%3E %3Cpath fill='%23FFCD00' fill-rule='nonzero' d='M12 3h1v3h-1V3zm5.207 1.086l.707.707-2.121 2.121-.707-.707 2.121-2.121zm-10.121.707l.707-.707 2.121 2.121-.707.707-2.121-2.121z'/%3E %3Cpath stroke='%233397FF' d='M17.936 12h-3.958V9.388A1.38 1.38 0 0 0 12.6 8c-.497 0-.965.267-1.212.697L9 13H8v9h9.153a2 2 0 0 0 1.983-1.741l.783-6A2 2 0 0 0 17.936 12z'/%3E %3Cpath fill='%233397FF' stroke='%233397FF' d='M4 22h4v-9H4z'/%3E %3C/g%3E %3C/svg%3E";
  if (!button[0].classList.contains("like_ButtonOn")) {
    clickCount+=1;
    button[0].classList.add("like_ButtonOn"); // 클래스 추가
    count.innerHTML = clickCount;
  } else {
    clickCount-=1;
    likeImage.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E %3Cg fill='none' fill-rule='evenodd'%3E %3Cpath fill='none' d='M0 0h24v24H0z'/%3E %3Cpath fill='%23FFCD00' fill-rule='nonzero' d='M12 3h1v3h-1V3zm5.207 1.086l.707.707-2.121 2.121-.707-.707 2.121-2.121zm-10.121.707l.707-.707 2.121 2.121-.707.707-2.121-2.121z'/%3E %3Cpath fill='%23BBB' stroke='%23BBB' d='M4 22h4v-9H4z'/%3E %3Cpath stroke='%23BBB' d='M17.936 12h-3.958V9.388A1.38 1.38 0 0 0 12.6 8c-.497 0-.965.267-1.212.697L9 13H8v9h9.153a2 2 0 0 0 1.983-1.741l.783-6A2 2 0 0 0 17.936 12z'/%3E %3C/g%3E %3C/svg%3E";
    button[0].classList.remove("like_ButtonOn");
    count.innerHTML = clickCount;
  }

  
});

commentButtom[0].addEventListener("click", function(){
  commentForm.style.display = 'block';
})

cancelButton.addEventListener('click', function() {
  commentForm.style.display = 'none'; // 취소 버튼을 클릭하면 form을 숨기게 설정
});