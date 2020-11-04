const questions = document.querySelectorAll('.accord-question');

questions.forEach(question => {
    question.addEventListener("click", event => {

        // display only one tab 
        const currentQuestion = document.querySelector(".accord-question.active");
        if(currentQuestion && currentQuestion!==question) {
            currentQuestion.classList.toggle("active");
            currentQuestion.nextElementSibling.style.maxHeight = 0;
        }

        // show/hide answer
        question.classList.toggle("active");

        const answer = question.nextElementSibling;
        const arrows = document.querySelectorAll('.arrow');
      
        if(question.classList.contains("active")) {
          answer.style.maxHeight = answer.scrollHeight + "px";
          question.classList.toggle("active-bold");
          arrows.forEach(arrow => {
            arrow.classList.add("active");
           })
        } else {
          answer.style.maxHeight = 0;
          arrows.forEach(arrow => {
            arrow.classList.remove("active");
          })
        }
    });
  });