document.addEventListener('DOMContentLoaded', function () {
    const questions = [
        {
            question: "Which part of the Indian Constitution deals with the Union Legislature?",
            options: ["Part IV", "Part V", "Part VI", "Part VII"],
            answer: 1 // Part V
        },
        {
            question: "The maximum strength of the Lok Sabha, as provided by the Constitution, is:",
            options: ["552", "500", "545", "525"],
            answer: 0 // 552
        },
        {
            question: "Who has the power to dissolve the Lok Sabha?",
            options: ["The Prime Minister", "The President", "The Chief Justice of India", "The Speaker of the Lok Sabha"],
            answer: 1 // The President
        },
        {
            question: "What is the tenure of a Rajya Sabha member?",
            options: ["5 years", "6 years", "4 years", "Permanent"],
            answer: 1 // 6 years
        },
        {
            question: "Which Article of the Constitution deals with the election of the President of India?",
            options: ["Article 52", "Article 54", "Article 56", "Article 6"],
            answer: 1 // Article 54
        }
    ];

    let currentQuestionIndex = 0;
    let userAnswers = new Array(questions.length).fill(null);
    let totalXP = 0;

    const questionContainer = document.getElementById('question');
    const optionButtons = document.querySelectorAll('.option');
    const outputDiv = document.getElementById('output');
    const nextButton = document.getElementById('next-btn');
    const prevButton = document.getElementById('prev-btn');
    const scoreContainer = document.getElementById('score-container');

    function loadQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        questionContainer.textContent = currentQuestion.question;
        optionButtons.forEach((button, index) => {
            button.textContent = currentQuestion.options[index];
            button.classList.remove('correct', 'incorrect', 'selected');
            button.disabled = false;
            if (userAnswers[currentQuestionIndex] === index) {
                button.classList.add('selected');
            }
        });
        updateOutput();
        updateNavigationButtons();
    }

    function updateOutput() {
        if (userAnswers[currentQuestionIndex] === null) {
            outputDiv.textContent = "";
        } else if (userAnswers[currentQuestionIndex] === questions[currentQuestionIndex].answer) {
            outputDiv.textContent = "Correct!";
            outputDiv.style.color = "green";
        } else {
            outputDiv.textContent = "Incorrect!";
            outputDiv.style.color = "red";
        }
    }

    function selectAnswer(e) {
        const selectedButton = e.target;
        const selectedAnswerIndex = Array.from(optionButtons).indexOf(selectedButton);
        userAnswers[currentQuestionIndex] = selectedAnswerIndex;
        if (selectedAnswerIndex === questions[currentQuestionIndex].answer) {
            totalXP += 50; // Award 50 XP for correct answers
        }
        // Disable all buttons after selection
        optionButtons.forEach(button => button.disabled = true);
        loadQuestion(); // Update the display to reflect the chosen answer
    }

    function showNextQuestion() {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            loadQuestion();
        } else {
            displayScore();
        }
    }

    function showPreviousQuestion() {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            loadQuestion();
        }
    }

    function updateNavigationButtons() {
        prevButton.style.display = currentQuestionIndex === 0 ? 'none' : 'inline-block';
        nextButton.style.display = currentQuestionIndex === questions.length - 1 ? 'none' : 'inline-block';
    }

    function displayScore() {
        const correctAnswers = userAnswers.filter((answer, index) => answer === questions[index].answer).length;
        scoreContainer.textContent = `${correctAnswers} out of ${questions.length} are answered correctly. Total XP earned = ${correctAnswers * 50} XP`;
    }

    optionButtons.forEach(button => {
        button.addEventListener('click', selectAnswer);
    });

    nextButton.addEventListener('click', showNextQuestion);
    prevButton.addEventListener('click', showPreviousQuestion);

    loadQuestion();
});
