document.addEventListener("DOMContentLoaded", function () {
    const quizForm = document.getElementById("quizForm");
    const submitButton = document.getElementById("submitBtn");
    const resultDiv = document.getElementById("result");
    let isSubmitted = false;

    const correctAnswers = {
        q1: "b",
        q2: "c",
        q3: "c",
        q4: "d",
        q5: "c"
    };

    function checkAnswers() {
        let score = 0;
        const questions = document.querySelectorAll(".question");

        questions.forEach((question) => {
            const selectedOption = question.querySelector("input[type='radio']:checked");
            const feedback = document.createElement("p");
            feedback.className = "feedback";

            if (selectedOption) {
                const questionKey = selectedOption.name;
                if (selectedOption.value === correctAnswers[questionKey]) {
                    score++;
                    feedback.textContent = "Correct!";
                    feedback.style.color = "green";
                } else {
                    feedback.textContent = "Incorrect!";
                    feedback.style.color = "red";
                }
            } else {
                feedback.textContent = "No answer selected!";
                feedback.style.color = "orange";
            }

            // Disable all options for this question
            const allOptions = question.querySelectorAll("input[type='radio']");
            allOptions.forEach(option => option.disabled = true);

            question.appendChild(feedback);
        });

        resultDiv.innerHTML = `You scored ${score} out of 5.<br>Total XP earned = ${score * 50} XP`;

        // Show Try Again button
        const tryAgainButton = document.createElement("button");
        tryAgainButton.textContent = "Try Again";
        tryAgainButton.className = "try-again-btn";
        tryAgainButton.addEventListener("click", resetQuiz);
        resultDiv.appendChild(tryAgainButton);
    }

    function resetQuiz() {
        const questions = document.querySelectorAll(".question");
        questions.forEach(question => {
            const allOptions = question.querySelectorAll("input[type='radio']");
            allOptions.forEach(option => {
                option.disabled = false;
                option.checked = false;
            });
            // Remove feedback
            const feedback = question.querySelector(".feedback");
            if (feedback) {
                feedback.remove();
            }
        });

        resultDiv.innerHTML = "";
        isSubmitted = false;
        submitButton.disabled = false;  // Re-enable the submit button
    }

    submitButton.addEventListener("click", function (event) {
        event.preventDefault();
        if (!isSubmitted) {
            checkAnswers();
            isSubmitted = true;
            submitButton.disabled = true;  // Disable the submit button after submission
        }
    });
});
