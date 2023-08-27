const pcRedHeart = document.querySelector(".PcRedHeart");
const pcNoHeart = document.querySelector(".PcNoHeart");

pcRedHeart.addEventListener("click", ()=> {
  pcRedHeart.style.display = "none";
  pcNoHeart.style.display = "block";
})

pcNoHeart.addEventListener("click", ()=> {
  pcNoHeart.style.display = "none";
  pcRedHeart.style.display = "block";
})

const redHeart = document.querySelector(".RedHeart");
const noHeart = document.querySelector(".NoHeart");

redHeart.addEventListener("click", ()=> {
  redHeart.style.display = "none";
  noHeart.style.display = "block";
})

noHeart.addEventListener("click", ()=> {
  noHeart.style.display = "none";
  redHeart.style.display = "block";
})