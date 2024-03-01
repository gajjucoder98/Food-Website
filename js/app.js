
var hamburger = document.querySelector("#hamburger");
var menu = document.querySelector(".menu");
var doted = document.querySelector("#dote");
var piyu = document.querySelector(".piyu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("open-burger");
  if (menu.style.transform == "") {
    menu.style.transform = "translateX(0px)";
    piyu.style.transform = "";
    
  } else {
    menu.style.transform = "";
  }
});

doted.addEventListener("click", function () {
  if (piyu.style.transform == "") {
    piyu.style.transform = "translateX(0px)";
    menu.style.transform = "";
    piyu.style.opacity = 1;
    hamburger.classList.remove("open-burger");

  } else {
    piyu.style.transform = "";
  }
});
