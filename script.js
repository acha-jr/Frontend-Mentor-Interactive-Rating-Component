const box = document.querySelector(".box");
const thank = document.querySelector(".thank");
const submit = document.getElementById("submit");
const rating = document.querySelectorAll(".rating");
const selected = document.getElementById("selected");

submit.addEventListener("click", () => {
  box.style.display = "none";
  thank.style.display = "block";
});

rating.forEach((e) => {
  e.addEventListener("click", (e) => {
    let rateValue = e.target.textContent;
    selected.textContent = rateValue;
  });
});
