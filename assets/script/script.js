const increment = document.querySelector(".increment");
const decrement = document.querySelector(".decrement");
const reset = document.querySelector(".reset");
const span = document.querySelector("span");
//////
let count = 0;
increment.addEventListener("click", () => {
    count++;
    span.innerText = count;
});

decrement.addEventListener("click", () => {
    if (count > 0) {
        count--;
        span.innerText = count;
    }
});
reset.addEventListener("click", () => {
    count = 0;
    span.innerText = count;
});
