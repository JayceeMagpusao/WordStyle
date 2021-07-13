let nextWord=document.querySelector(".word");
let para=document.querySelector("#word p");

let words = ['ice cream', 'pizza', 'mozarella'];
nextWord.addEventListener('click', () => {
  para.innerHTML = word[Math.floor(Math.random()*word.length)];
})
