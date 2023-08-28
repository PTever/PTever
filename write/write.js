const textarea = document.getElementsByClassName('WritePage_TextArea');
const button = document.getElementsByClassName('buttonOff');


const title = document.getElementById("title");
const content = document.getElementById("content");

// textarea.addEventLinstener("input", function() {
//   if(!textarea.value){
//     button.style.backgroundColor = rgb(51, 151, 255);
//   }
// });

let titleFlag = false;
let contentFlag = false;

title.addEventListener("keyup", function(){
  // if(!title.value) titleFlag = true;
  // else titleFlag = false;

  
  console.log(isEmpty(title.value))
  console.log(isEmpty(content.value))
  if(!isEmpty(title.value) && !isEmpty(content.value)) {
    // button[0].style.backgroundColor = rgb(51, 151, 255);
    console.log(isEmpty(title.value));
    console.log(isEmpty(content.value));
    button[0].style.backgroundColor = 'rgb(51, 151, 255)';
    button[0].removeAttribute('disabled')
  }else {
    console.log(isEmpty(title.value));
    console.log(isEmpty(content.value));
    button[0].style.backgroundColor = 'rgb(221, 221, 221)';
    button[0].setAttribute('disabled')
  }

})

content.addEventListener("keyup", function(){
  //  if (!isEmpty(content.value)) contentFlag = true;
  //  else contentFlag = false;

  console.log(title.value)
  console.log(content.value)


  if(!isEmpty(title.value) && !isEmpty(content.value)) {
    button[0].style.backgroundColor = 'rgb(51, 151, 255)';
    button[0].removeAttribute('disabled')
    console.log(isEmpty(title.value));
    console.log(isEmpty(content.value));
  }else if(isEmpty(content.value)) {
    button[0].style.backgroundColor = 'rgb(221, 221, 221)';
    button[0].setAttribute('disabled')
    console.log(isEmpty(title.value));
    console.log(isEmpty(content.value));
  }
})

function isEmpty(target){
 if( target == null || target == undefined || target == ''){
  return true;
 }
 else{
  return false;
 }
}

const freePost = document.getElementById("freePost")
const transaction = document.getElementById("transaction");

console.log(freePost);
console.log(transaction);

freePost.addEventListener("click", function(e){

  //현재 div의 class 명 가져오기
  const Box = document.getElementById('Box1');
  // class명으로 체크여부 판
  if(Box.className === 'CheckboxItem_Box1'){
    Box.classList.remove('CheckboxItem_Box1');
    Box.classList.add('buttonOn');
  }else if(Box.className === 'buttonOn'){
    Box.classList.remove('buttonOn');
    Box.classList.add('CheckboxItem_Box1');
  }
})

transaction.addEventListener("click", function(){
 //현재 div의 class 명 가져오기
 const Box = document.getElementById('Box2');
 // class명으로 체크여부 판
 if(Box.className === 'CheckboxItem_Box2'){
   Box.classList.remove('CheckboxItem_Box2');
   Box.classList.add('buttonOn');
 }else if(Box.className === 'buttonOn'){
   Box.classList.remove('buttonOn');
   Box.classList.add('CheckboxItem_Box2');
 }
})