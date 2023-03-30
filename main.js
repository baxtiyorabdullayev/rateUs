"use strict";

let body = document.querySelector("body");

let container = document.createElement("div");
container.className = "container";

let text = document.createElement("h2");
text.textContent = "Rate us";

let rateBox = document.createElement("div");
rateBox.className = "rate_box";

let rateBlock = document.createElement("div");
rateBlock.className = "rate_block";

let yellowImage = document.createElement("img");
yellowImage.src = "./rate.png";

let point = document.createElement("input");
point.type = "range";
point.className = "point";
point.value = 0;
point.min = 1;
point.max = 100;

function change() {
  let num = +point.value * 5;
  rateBlock.style.width = `${num}px`;
  text.textContent = `You rated 100/${num / 5}`;
}
point.addEventListener("change", change);

const appendChilder = (daddy, baby) => {
  return daddy.appendChild(baby);
};

appendChilder(container, text);
appendChilder(rateBox, rateBlock);
appendChilder(container, rateBox);
appendChilder(rateBox, yellowImage);
appendChilder(container, point);
appendChilder(body, container);
