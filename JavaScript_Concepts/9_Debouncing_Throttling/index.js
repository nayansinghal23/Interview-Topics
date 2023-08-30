// Debouncing - Let's assume that we have opened flipcart.com and we want to find something, so we will type that thing in search box. If every time we enter a character in search-box and api call was made, then it would have a huge amount of load on the api or backend. Hence this is when debouncing comes to rescue. If user countinuously types something the api call isn't made but as soon as the user waits for some time or some moment the api call is then made.

// Throttling - Let's consider twitter.com, while reaching certain amount of posts or tweet, the api load itselfs to show new tweets and posts and the infinite scroll functionality is recieved

// Ques-1 -> Create a button UI and add debounce as follows -> Shows "Button Pressed <X> Times" every time button is pressed and Increased "Triggered <Y> Times" count after 800ms of debounce
/*
let button = document.querySelector("button");
let btnPressed = document.querySelector(".pressed");
let btnTriggered = document.querySelector(".count");
let pressed = 0,
  triggered = 0;

const debounceCount = _.debounce(() => {
  btnTriggered.innerHTML = ++triggered;
}, 800);

button.addEventListener("click", () => {
  btnPressed.innerHTML = ++pressed;
  debounceCount();
});
*/

// Ques-2 -> Create a button UI and add throttle as follows -> Shows "Button Pressed <X> Times" every time button is pressed and Increased "Triggered <Y> Times" count after 800ms of throttle
let button = document.querySelector("button");
let btnPressed = document.querySelector(".pressed");
let btnTriggered = document.querySelector(".count");
let pressed = 0,
  triggered = 0;

const throttleCount = _.throttle(() => {
  btnTriggered.innerHTML = ++triggered;
}, 800);

button.addEventListener("click", () => {
  btnPressed.innerHTML = ++pressed;
  throttleCount();
});
