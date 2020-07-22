var c = ["blue", "green", "yellow", "red"];

  function changeColor() {
    setTimeout(function loop() {
      document.bgColor = c.shift();
      if (c.length) {
        setTimeout(loop, 5000);
      }
    }, 5000);
  }

  function start() {
    setInterval(changeColor(), 20000);
  }



const name = prompt("Enter your name","Anonymous");
title.innerHTML += ("Hey WELCOME!! "+ name);


const ctime = document.getElementById('time');


function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText = time;
}

setInterval(clock,1000);

const dmode = document.getElementById('dark');

dmode.onclick = function changeColor(){
    
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    document.body.style.fontFamily = 'Helvetica';
   
}