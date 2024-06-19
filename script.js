"use strict";
let count = 0;

document.querySelector(".decrease").addEventListener("click", function () {
  count = Number(document.querySelector(".span").textContent);
  document.querySelector(".span").textContent = count - 1;
  if (count < 1) document.querySelector(".span").style.color = "#db411a";
});

document.querySelector(".reset").addEventListener("click", function () {
  count = Number(document.querySelector(".span").textContent);
  document.querySelector(".span").textContent = count = 0;
  document.querySelector(".span").style.color = "black";
});

document.querySelector(".increase").addEventListener("click", function () {
  count = Number(document.querySelector(".span").textContent);
  document.querySelector(".span").textContent = count + 1;
  if (count > -1) document.querySelector(".span").style.color = "#384534";
});
