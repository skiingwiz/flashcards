function rand() {
  return Math.floor(Math.random() * 11);
}

function populate() {
   document.getElementById('top').innerText = rand();
   document.getElementById('bottom').innerText = rand();
   document.getElementById('answer').innerText = '?';
}

function showAnswer() {
   var t = parseInt(document.getElementById('top').innerText);
   var b = parseInt(document.getElementById('bottom').innerText);

   document.getElementById('answer').innerText = (t + b);
}

function handleClick() {
   if(document.getElementById('answer').innerText == '?') {
     showAnswer();
   } else {
     populate();
   }
}

document.addEventListener("DOMContentLoaded", function(event) { 
  document.querySelector('body').onclick = handleClick;
  populate();
});

