const progressBar = document.querySelector(".progress-bar");
const progressBarAll = document.querySelector(".progress-bar-fill");

// 10% -> 1sec => 100% -> 10sec
let count = 1;
for (let i = 1; i <= 10; i++) {
  setTimeout(() => {
    for (let j = count; j < 10 + count; j++) {
      setTimeout(() => {
        progressBarAll.style.transform = `translateX(${j - 100}%)`;
      }, j * 100);
    }
    count += 10;
  }, i * 1000);
}
