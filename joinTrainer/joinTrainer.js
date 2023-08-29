
// FAQ에서 화살표 버튼 클릭 시 실행 함수
// 화살표 모양이 바뀝니다.
const replyArrows = document.querySelectorAll(".ReplyArrowImg");
replyArrows.forEach((arrow) => {
    arrow.addEventListener("click", (e) => {
        if(e.target.style.transform != "rotate(-90deg)"){
            e.target.style.transform = "rotate(-90deg)";
        } else{
            e.target.style.transform = "rotate(90deg)";
        }
    })
})

// FAQ에서 질문 클릭 시 실행 함수
const questionWrappers = document.querySelectorAll(".QuestionWrapper");

questionWrappers.forEach((question) => {
    question.addEventListener("click", (e) => {
        e.preventDefault();
        question.nextElementSibling.classList.toggle("HiddenReply");
        question.nextElementSibling.classList.toggle("ShowReply");
    })
})