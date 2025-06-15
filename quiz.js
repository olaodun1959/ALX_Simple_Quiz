function checkAnswer() {
    // Define the correct answer
    var correctAnswer = "4";

    // Retrieve the user's selected answer
    var selectedOption = document.querySelector('input[name="quiz"]:checked');
    var userAnswer = selectedOption ? selectedOption.value : null;

    // Select feedback element
    var feedbackElement = document.getElementById("feedback");

    // Compare answers and display feedback
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
        feedbackElement.style.color = "#28a745";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
        feedbackElement.style.color = "#dc3545";
    }
}

// Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
