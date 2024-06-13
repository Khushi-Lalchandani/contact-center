"use strict";

var chevron = document.querySelector(".chevron");
var msgIcon = document.querySelector(".msgIcon");
var sideBar = document.querySelector(".sidebar");
var homePage = document.querySelector(".home_page");
var chatIcon = document.querySelector(".hover");
var sideBar1 = document.querySelector(".sidebar1");

window.onresize = function () {
  basic();
};
window.onload = function () {
  basic();
};
chatIcon.addEventListener("mouseover", function () {
  if (window.innerWidth < 550) {
    sideBar1.classList.remove("none");
  }
});
sideBar1.addEventListener("mouseleave", function (e) {
  setTimeout(() => {
    sideBar1.classList.add("none");
  }, 400);
});

function noSideBar() {
  sideBar.style.display = "none";
}
function displaySideBar() {
  sideBar.style.display = "flex";
}
function basic() {
  if (window.innerWidth >= 1120) {
    displaySideBar();

    sideBar1.classList.add("none");

    homePage.style.gridArea = "1/3/2/-1";

    chevron.onclick = function () {
      noSideBar();
      homePage.style.gridArea = "1/2/2/-1";
    };
    msgIcon.onclick = function () {
      displaySideBar();
      homePage.style.gridArea = "1/3/2/-1";
    };
  } else if (window.innerWidth > 550 && window.innerWidth < 1120) {
    displaySideBar();
    sideBar1.classList.add("none");
    homePage.style.gridArea = "2/2/3/-1";
    chevron.onclick = function () {
      noSideBar();
      homePage.style.gridArea = "2/1/3/-1";
    };
    chatIcon.onclick = function () {
      displaySideBar();
      homePage.style.gridArea = "2/2/3/-1";
    };
  } else if (window.innerWidth <= 550) {
    noSideBar();
  } else {
    return;
  }
}

var items = document.querySelectorAll(".option_items");
console.log(items);

function active(e) {
  items.forEach((i) => {
    i.classList.remove("active");
  });
  e.classList.add("active");
}
