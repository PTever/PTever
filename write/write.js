const textarea = document.getElementsByClassName('WritePage_TextArea');
const button = document.getElementsByClassName('WritePage_Footer');

textarea.addEventLinstener("input", function() {
  if(!textarea.value){
    button.style.backgroundColor = rgb(51, 151, 255);
  }
});