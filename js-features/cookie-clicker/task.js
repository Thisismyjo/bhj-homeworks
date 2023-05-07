const click = document.querySelector("#clicker__counter");
const cook = document.querySelector("#cookie");
const speed = document.querySelector("#clicker__speed");
let growing = true;
let timeNowOne;
let timeNowTwo;
let first = false;

cook.onclick = function () {
  click.textContent++;

  if (growing) {
    cook.width += 30;
    growing = false;
    timeNowOne = new Date().getTime();
  } else {
    cook.width -= 30;
    growing = true;
    timeNowTwo = new Date().getTime();
  }
  
  if(first == false) {
    timeNowTwo = timeNowOne;
    first = true;
  }
  
  let difrent = Math.abs(timeNowTwo - timeNowOne) / 1000;
  speed.textContent = difrent.toFixed(2);  

};

