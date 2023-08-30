// Event Bubbling
/*
const div = document.querySelector("div");
const form = document.querySelector("form");
const button = document.querySelector("button");

div.addEventListener("click", () => {
  console.log("div");
});
form.addEventListener("click", () => {
  console.log("form");
});
button.addEventListener("click", () => {
  console.log("button");
});
*/

// event.target vs this.target vs event.currentTarget
/*
const div = document.querySelector("div");
const form = document.querySelector("form");
const button = document.querySelector("button");

div.addEventListener("click", f);
form.addEventListener("click", f);
button.addEventListener("click", f);
function f(event) {
  console.log("currentTarget = " + event.currentTarget.tagName);
  console.log("target = " + event.target.tagName);
  console.log("this = " + this.tagName);
}
*/

// Event Capturing or Trickling
/*
const div = document.querySelector("div");
const form = document.querySelector("form");
const button = document.querySelector("button");

div.addEventListener(
  "click",
  () => {
    console.log("div");
  },
  {
    capture: true,
  }
);
form.addEventListener(
  "click",
  () => {
    console.log("form");
  },
  {
    capture: true,
  }
);
button.addEventListener(
  "click",
  () => {
    console.log("button");
  },
  {
    capture: true,
  }
);
*/

// How to stop event bubling or capturing
/*
const div = document.querySelector("div");
const form = document.querySelector("form");
const button = document.querySelector("button");

div.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("div");
});
form.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("form");
});
button.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("button");
});
*/

// Event Delegation -> Adding events to parent element rather than adding to their descendents
const products = document.querySelector(".products");
products.addEventListener("click", (e) => {
  if (e.target.tagName === "SPAN") {
    window.location.href = "/" + e.target.className;
  }
});
