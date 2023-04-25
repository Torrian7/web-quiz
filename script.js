// Define an array of questions and answers
const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "Berlin", "Madrid", "London"],
      answer: "Paris"
    },
    {
      question: "Which programming language is used for web development?",
      options: ["Java", "Python", "HTML", "Ruby"],
      answer: "HTML"
    },
    // Add more questions here
  ];
  
  // Get HTML elements
  const questionContainer = document.getElementById("question-container");
  const submitButton = document.getElementById("submit-btn");
  
  let currentQuestion = 0; // Keep track of the current question
  let score = 0; // Keep track of the user's score
  
  // Function to display the current question and answer options
  function displayQuestion() {
    const question = quizData[currentQuestion];
    questionContainer.innerHTML = `
      <h2>${question.question}</h2>
      <ul>
       ${question.options.map(option => `<li><button onclick="checkAnswer(event)"> ${option}</button></li>`).join("")}
      </ul>
    `;
  }
  
  // Function to check the user's selected answer
  function checkAnswer(event) {
    var selectedAnswer=event.target.value
    const question = quizData[currentQuestion];
    if (selectedAnswer === question.answer) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      displayQuestion();
    } else {
      // End of quiz, display results
      showResults();
    }
  }
  
  // Function to show the quiz results
  function showResults() {
    questionContainer.innerHTML = `
      <h2>Quiz Completed</h2>
      <p>Your score: ${score} out of ${quizData.length}</p>
    `;
  }
  
  // Event listener for submit button click
  submitButton.addEventListener("click", () => {
    const selectedAnswer = document.querySelector("input[type='radio']:checked");
    if (selectedAnswer) {
      checkAnswer(selectedAnswer.value);
    }
  });
  
  // Display the first question to start the quiz
  displayQuestion();
  