const answerToggle = document.querySelectorAll(".question_answer");
const question = document.querySelectorAll(".question_section");
const imageToggle = document.querySelectorAll(".img");

question.forEach((question, index) => {
  question.addEventListener("click", () => {
    answerToggle[index].classList.toggle("question_answer");
    if (imageToggle[index].src.match("images/icon-plus.svg")) {
      imageToggle[index].src = "images/icon-minus.svg";
    } else {
      imageToggle[index].src = "images/icon-plus.svg";
    }
  });
});
