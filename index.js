const startBtn = document.querySelector("#startBtn");
const btnChoices = document.querySelector(".btnChoices");
const container = document.querySelector(".card-body");
const title = document.querySelector(".questions");
const questionaire = [
    { question: "It is known as the DILG Act of 1990?" },
    { a: "RA 8551", b: "RA 9165", c: "RA 6975", d: "RA 9344", answer: "RA 6975" },
    { question: "It is the Law that gave birth to Philippine National Police?" },
    { a: "RA 8551", b: "RA 9165", c: "RA 6975", d: "RA 9344", answer: "RA 6975" },
    { question: "The Motto of the Philippine National Police is?" },
    { a: "Always Ready to the call of the Fatherland", b: "We Strike Hard", c: "To Serve and Protect", d: "To Protect and Serve", answer: "To Serve and Protect" },
    { question: "It is known as the prime mover of the Criminal Justice System?" },
    { a: "Police", b: "Prosecutor", c: "Court", d: "Correction", answer: "Prosecutor" },
    { question: "He became the first Filipino chief of police of the Philippine Constabulary?" },
    { a: "Col. Antonio C. Torres", b: "Brig/Gen. Rafael Crame", c: "Col. Marcus Ellis Jones", d: "Col. Lamberto T. Javalera", answer: "Brig/Gen. Rafael Crame" },
    { question: "This is known as the Reform and professionalization Act of 1998?" },
    { a: "RA 4864", b: "PD 765", c: "RA 6975", d: "RA 8551", answer: "RA 8551" },
    { question: "This theory of Police Service is telling us that Policemen are considered as the servant of higher authority, it is called??" },
    { a: "Home-Rule Theory", b: "Continental Theory", c: "Old Concept", d: "Modern Concept", answer: "Continental Theory" },
    { question: "If you believe that Policemen are servant of the community, you believe in the theory of?" },
    { a: "Home-Rule Theory", b: "Continental Theory", c: "Old Concept", d: "Modern Concept", answer: "Home-Rule Theory" },
    { question: "To Enforcement of laws and ordinances relative to the protection of lives and properties is part of __________________________ function of the Philippine National Police?" },
    { a: "Statutory Function", b: "Administrative Function", c: "Miscellaneous Function", d: "Discretionary Function", answer: "Statutory Function" },
    { question: "To issue licenses for the possession of firearms and explosives in accordance with law is part of the _______________________ function of the Philippine National Police?" },
    {a: "Statutory Function", b: "Administrative Function", c: "Miscellaneous Function", d: "Discretionary Function", answer: "Administrative Function" }
];

let currentQuestion = 0;
let currentAnswer = 1;
let totalCorrect = 0;
const jsConfetti = new JSConfetti()

startBtn.addEventListener("click", () => {
    displayQuestion();
});

function displayQuestion() {
    const questionData = questionaire[currentQuestion];
    const answerData = questionaire[currentAnswer];
    title.innerText = questionData.question;
    btnChoices.innerHTML = "";
    const choices = [answerData.a, answerData.b, answerData.c, answerData.d];
    choices.forEach(choice => {
        const btn = document.createElement("button");
        btn.className = "list-group-item"
        btn.textContent = choice;
        btn.addEventListener("click", () => validateAnswer(choice));
        btnChoices.appendChild(btn);
    });
        startBtn.remove();
    
}

function validateAnswer(selectedAnswer) {
    const correctAnswer = questionaire[currentAnswer].answer;
    const allBtn = document.querySelectorAll("button");
    allBtn.forEach(btn => {
        btn.disabled = true; // Disable buttons after an answer is selected
      if (btn.textContent === selectedAnswer) {
        if (btn.textContent == correctAnswer) {
            btn.style.backgroundColor = "green";
            btn.style.color = "whitesmoke";
            totalCorrect +=1;
        } else {
            btn.style.backgroundColor = "red";
            btn.style.color = "whitesmoke"
        }
      }
    });
        items = questionaire.length/2
        const nextButton = document.createElement("button");
        nextButton.textContent = "NEXT";
        nextButton.addEventListener("click", displayNextQuestion);
        container.insertAdjacentElement("beforeend",nextButton);
        nextButton.style.backgroundColor = "green"
        nextButton.style.color = "whitesmoke"
        console.log(currentQuestion)
        if (currentQuestion > questionaire.length-3)
          allBtn.forEach(btn => {
          btn.remove();
          title.textContent = "Your total score is " + totalCorrect + "/" + items;
          nextButton.remove();   
          const createTrophyImage = document.createElement("img");
          createTrophyImage.className = "trophy"
          container.appendChild(createTrophyImage);
          const trophyImage = document.querySelector(".trophy");
          trophyImage.setAttribute("src", "/t5.png")
          jsConfetti.addConfetti()
        });
}

function displayNextQuestion() {
    // Increment question and answer indices
    currentQuestion += 2;
    currentAnswer += 2;

    // Reset button colors and enable buttons
    const allBtn = document.querySelectorAll("button");
    allBtn.forEach(btn => {
        btn.disabled = false;
        btn.style.backgroundColor = "";
    });

    // Remove "NEXT" button
    this.remove();

    // Display next question
    displayQuestion();
  }
