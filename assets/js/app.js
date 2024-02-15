const adviceId = document.querySelector(".board-number");
const adviceQuote = document.querySelector(".advice");
const btn = document.querySelector(".btn");

function generateAdvice() {
    fetch("https://api.adviceslip.com/advice", { cache: "no-cache"})
    .then((response) => response.json())
    .then((response) => {
        let data = response.slip;
        let dataId = data.id;
        let dataAdvice = data.advice;

        adviceId.innerHTML = `advice # ${dataId}`;
        adviceQuote.innerHTML = dataAdvice;
    });
}

window.onload = generateAdvice();

btn.addEventListener("click", () => {
    generateAdvice();
})