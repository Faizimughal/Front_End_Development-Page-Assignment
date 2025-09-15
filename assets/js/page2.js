let answers = document.querySelectorAll(".answer");
let buttons = document.querySelectorAll(".arrow-btn");
let questions = document.querySelectorAll(".question1");

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
        questions[i].style.marginTop = ""; // reset margin
      }
    });

    answers[index].classList.toggle("none");
    button.classList.toggle("rotate");

    if (!answers[index].classList.contains("none")) {
      questions[index].style.marginTop = "0";

      // pehle answer open hone de, phir scroll kare
      setTimeout(() => {
        let top = questions[index].getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: top - 100, // thoda gap de upar
          behavior: "smooth",
        });
      }, 500); // delay taake answer expand ho jaye
    } else {
      questions[index].style.marginTop = "";
    }
  });
});
