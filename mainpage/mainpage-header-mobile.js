// 데스크탑 버전 헤더, 모바일 버전 헤더 가져오기
const headerDeskTop = document.querySelector(".NavBar-wrapper");
const headerMobile = document.querySelector(".Header-Mobile");
const navMobile = document.querySelector(".BottomBar-Wrapper");

// 브라우저 크기 변화 감지
function checkMobile() {
    if (window.innerWidth <= 768) {
        headerDeskTop.style.display = "none";
        headerMobile.style.display = "block";
        navMobile.style.display = "flex";
    } else {
        headerDeskTop.style.display = "block";
        headerMobile.style.display = "none";
        navMobile.style.display = "none";
    }
}

// 페이지 로드 및 브라우저 크기 변화 시 함수 호출
window.addEventListener("load", checkMobile);
window.addEventListener("resize", checkMobile);



