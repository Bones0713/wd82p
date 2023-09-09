// DOM Manipulation & Events

//  Select nodes in the DOM
const container = document.querySelector("#container");
const display = document.querySelector(".display");

// Create nodes in the DOM

const div = document.createElement("div");
div.classList.add("red-box");

// Append element in the DOM or another node
container.appendChild(div);

//  Remove elements from the DOM or another node
// container.removeChild(div);

container.style.height = "100px";

const btn = document.querySelector("#btn");
