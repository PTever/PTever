const profileRedHeart = document.querySelector(".ProfileRedHeart");
const profileNoHeart = document.querySelector(".ProfileNoHeart");

profileRedHeart.addEventListener("click", ()=> {
  profileRedHeart.style.display = "none";
  profileNoHeart.style.display = "block";
})

profileNoHeart.addEventListener("click", ()=> {
  profileNoHeart.style.display = "none";
  profileRedHeart.style.display = "block";
})



