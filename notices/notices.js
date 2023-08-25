// 공지사항 제목 클릭 시 상세 내용 표시 관련 js
// 임시 데이터이므로 첫 번째 공지사항 글에만 적용했습니다.

// 웹
const noticeTitle = document.querySelectorAll(".Notice-TitleWrapper");
const noticeContent = document.querySelectorAll(".Notice-ContentWrapper");

noticeTitle[0].addEventListener("click", () => {
    if(noticeTitle[0].style.borderBottom != "none"){
        noticeTitle[0].style.borderBottom = "none";
        noticeContent[0].style.display = "block";
    } else{
        noticeTitle[0].style.borderBottom = "1px solid rgb(230, 230, 230)";
        noticeContent[0].style.display = "none";
    }
});

// 앱
const noticeTitleMobile = document.querySelectorAll(".Notice-TitleWrapper-Mobile");
const noticeContentMobile = document.querySelectorAll(".Notice-ContentWrapper-Mobile");

noticeTitleMobile[0].addEventListener("click", () => {
    if(noticeTitleMobile[0].style.borderBottom != "none"){
        noticeTitleMobile[0].style.borderBottom = "none";
        noticeContentMobile[0].style.display = "block";
    } else{
        noticeTitleMobile[0].style.borderBottom = "1px solid rgb(230, 230, 230)";
        noticeContentMobile[0].style.display = "none";
    }
});