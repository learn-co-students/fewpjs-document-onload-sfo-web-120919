// Your code goes here
function e() 
{
    console.log("The DOM has loaded");
    let ele = document.getElementById("text");
    ele.textContent = "This is really cool!";
}

document.addEventListener("DOMContentLoaded", e);
   
  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );