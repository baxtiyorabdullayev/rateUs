"use strict";

const rateBlock = document.querySelector(".rate_block");
const point = document.querySelector(".point");
const button = document.querySelector(".button");

function change() {
  let num = +point.value * 5;
  rateBlock.style.width = `${num}px`;
}
point.addEventListener("change", change);
