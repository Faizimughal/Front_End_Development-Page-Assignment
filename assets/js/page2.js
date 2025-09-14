let answers = document.querySelectorAll(".answer");
let buttons = document.querySelectorAll(".arrow-btn");

window.addEventListener("DOMContentLoaded", () => {
  answers.forEach((answer) => {
    answer.classList.add("none");
  });
});

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    answers.forEach((answer, i) => {
      if (i !== index) {
        answer.classList.add("none");
        buttons[i].classList.remove("rotate");
      }
    });

    answers[index].classList.toggle("none");
    button.classList.toggle("rotate");
  });
});
