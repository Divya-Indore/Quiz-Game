const quizData = [
  {
    question: "What is the full form of HTML?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Tool Mark Language",
      "Home Text Markup Language"
    ],
    answer: 0
  },
  {
    question: "What is CSS used for?",
    options: ["Logic", "Structure", "Styling", "Database"],
    answer: 2
  },
  {
    question: "What is JavaScript used for?",
    options: ["Design", "Styling", "Logic", "Hosting"],
    answer: 2
  },
  {
    question: "Which tag is used for headings in HTML?",
    options: ["<p>", "<h1>", "<div>", "<span>"],
    answer: 1
  },
  {
    question: "What is the CSS color property used for?",
    options: ["Text color", "Background image", "Border size", "Font size"],
    answer: 0
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["var", "let", "const", "All of these"],
    answer: 3
  },
  {
    question: "Which language is used to style a website?",
    options: ["HTML", "CSS", "JavaScript", "PHP"],
    answer: 1
  },
  {
    question: "What is the file extension of a JavaScript file?",
    options: [".html", ".css", ".js", ".java"],
    answer: 2
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const options = document.querySelectorAll(".option");
const scoreEl = document.getElementById("score");
const restartBtn = document.getElementById("restart");
const feedbackEl = document.getElementById("feedback");

function loadQuestion() {
  feedbackEl.innerText = "";
  questionEl.innerText = quizData[currentQuestion].question;

  options.forEach((btn, index) => {
    btn.innerText = quizData[currentQuestion].options[index];
    btn.style.display = "block";
    btn.disabled = false;
    btn.onclick = () => checkAnswer(index);
  });
}

function checkAnswer(selected) {

  options.forEach(btn => btn.disabled = true);

  const correctIndex = quizData[currentQuestion].answer;
  const correctAnswer = quizData[currentQuestion].options[correctIndex];

  if (selected === correctIndex) {
    score++;
    feedbackEl.style.color = "green";
    feedbackEl.innerText = "✅ Correct Answer!";
  } else {
    feedbackEl.style.color = "red";
    feedbackEl.innerText = "❌ Wrong Answer! Correct answer is: " + correctAnswer;
  }

  scoreEl.innerText = "Score:" + score + " / 8";

  setTimeout(() => {
    currentQuestion++;

    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      finishQuiz();
    }

  }, 2000);
}

function finishQuiz() {
  questionEl.innerText = "Quiz Finished 🎉";
  options.forEach(btn => btn.style.display = "none");

  feedbackEl.style.color = "blue";
  feedbackEl.innerText = "Your Final Score: " + score;

  restartBtn.style.display = "block";
}

restartBtn.onclick = function () {
  currentQuestion = 0;
  score = 0;
  scoreEl.innerText = "Score: 0";

  restartBtn.style.display = "none";

  loadQuestion();
};

loadQuestion();