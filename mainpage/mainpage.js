// 메인페이지 웹 메인 슬라이드배너 js입니다.

const mainBanner = document.querySelector(".ImageSlider-ImageTrack");
const currentCount = document.querySelector(".MainBanner-CurrentCount");
let count = 0;
let firstDiv = document.createElement("div");
let lastDiv = document.createElement("div");

// 첫 화면에서는 첫 번째 배너가 보이지만,
// 이 함수가 실행되는 순간 두 번째 배너로 넘어간다.
function autoSlide() {
    // 이동시간 0.5초
    mainBanner.style.transition = "transform 0.5s";
    // 마지막 슬라이드일 때
    // 10번 뒤에 1번을 배치시킨다.
    // 10번에서 1번으로 슬라이드 진행
    // 0s를 줘서 원래 1번 위치로 이동(슬라이드 효과는 안 보임)
    count++;
    if (count == 10) {
        mainBanner.style.transform = "translate(-" + 768 * (count + 1) + "px)";
        setTimeout(function () {
            mainBanner.style.transition = "transform 0s";
            mainBanner.style.transform = "translate(-768px)";
        }, 500);
        count = 0;
    } else {
        mainBanner.style.transform = "translate(-" + 768 * (count + 1) + "px)";
    }
    // 더보기 버튼의 숫자를 업데이트해준다.
    currentCount.innerText = count+1;
}

// 가장 마지막에 첫 번째 배너를 이어 붙인다.
firstDiv.innerHTML = `<img src="./bannerImages/mainbanner_top1.png">`;
mainBanner.appendChild(firstDiv);

// 가장 첫 번째에 마지막 배너를 이어 붙인다.
lastDiv.innerHTML = `<img src="./bannerImages/mainbanner_top10.png">`;
mainBanner.insertBefore(lastDiv, document.querySelector(".ImageSlider-ImageTrack div"));

// 첫 번째 배너는 10번이니까 왼쪽으로 한 번 밀어서 1번이 보이게 한다.
mainBanner.style.transform = "translate(-768px)";

// 4초마다 슬라이드 이동
let inter = setInterval(autoSlide, 4000);

// 이전 버튼, 다음 버튼 구현
const arrows = document.querySelectorAll(".ImageSlider-Arrow");
let arrowButtonCheck = true;
arrows.forEach((arrow) => {
    arrow.addEventListener("click", function () {
        if (arrowButtonCheck) {
            arrowButtonCheck = false;
            clearInterval(inter);
            mainBanner.style.transition = "transform 0.5s";
            let arrowType = arrow.classList[1];
            if (arrowType == "ImageSlider-PrevArrow"){
                count--;
                if (count == -1) {
                    mainBanner.style.transform = "translate(0px)";
                    setTimeout(function () {
                        mainBanner.style.transition = "transform 0s";
                        mainBanner.style.transform = "translate(-7680px)";
                    }, 500);
                    count = 9;
                } else {
                    mainBanner.style.transform = "translate(-" + 768 * (count + 1) + "px)";
                }
            } else {
                count++;
                if (count == 10) {
                    mainBanner.style.transform = "translate(-" + 768 * (count + 1) + "px)";
                    setTimeout(function() {
                        mainBanner.style.transition = "transform 0s";
                        mainBanner.style.transform = "translate(-768px)";
                    }, 500);
                    count = 0;
                } else {
                    mainBanner.style.transform = "translate(-" + 768 * (count + 1) + "px)";
                }
            }
            inter = setInterval(autoSlide, 4000);
            setTimeout(function() {
                arrowButtonCheck = true;
            }, 500);
        }
        // 더보기 버튼의 숫자를 업데이트해준다.
        currentCount.innerText = count+1;
    })
})

//////////////////////////////////////////////////
// 슬라이드 배너의 더보기 버튼 클릭 시 배너 상세 팝업 js
const detailBannerButton = document.querySelector(".MainBanner-InfoButton");
const detailBannerInfo = document.querySelector(".FullScreenWrapper");
const detailExitButton = document.querySelector(".MainBannerViewer-Exit");

detailBannerButton.addEventListener("click", () => {
    detailBannerInfo.style.display = "block";
})

detailExitButton.addEventListener("click", () => {
    detailBannerInfo.style.display = "none";
})





//////////////////////////////////////////////////

// 메인페이지 앱 메인 슬라이드배너 js입니다.