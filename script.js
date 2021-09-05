const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

document.querySelectorAll(".item").forEach((el) =>
  el.addEventListener("click", function (e) {
    console.log("hallo-item", e.target, e.currentTarget);

    this.style.backgroundColor = randomColor();
  })
);

// document.querySelector(".first").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
// });

document.querySelector(".container").addEventListener("click", function (e) {
  console.log("hallo-container");
  console.log(e.target, e.currentTarget);
  this.style.backgroundColor = randomColor();
});

document.querySelector(".h1").addEventListener("click", function () {
  console.log("hallo-h1");
  this.style.backgroundColor = randomColor();
});
