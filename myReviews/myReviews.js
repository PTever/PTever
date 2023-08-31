const deleteImgContainer = document.querySelectorAll(".ReviewDeleteButton");

deleteImgContainer.forEach((container) => {
  container.children[0].addEventListener("mouseover", (e) => {
    let target = e.target;
    target.setAttribute("src", "./deleteYes.png");
  });
  container.children[0].addEventListener("mouseout", (e) => {
    let target = e.target;
    target.setAttribute("src", "./delete.png");
  });
});

const heartImgContainer = document.querySelectorAll(".ActionGroupLikeButton");

heartImgContainer.forEach((container) => {
  container.children[0].addEventListener("click", (e) => {
    let target = e.target;
    if (target.getAttribute("src") === "./reviewNoHeart.png") {
      target.setAttribute("src", "./reviewHeart.png");
      console.log(container.children[1].textContent);
      container.children[1].textContent = "1";
    } else if (target.getAttribute("src") === "./reviewHeart.png") {
      target.setAttribute("src", "./reviewNoHeart.png");
      container.children[1].textContent = "0";
    }
  });
});
