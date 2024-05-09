let totalScore = 0;
let questions = [
    {
        question: "PIM ย่อมาจากอะไร?",
        answers: ["พีไอเอ็ม", "ปิ๋ม", "พิม", "ภีม"],
        correctAnswer: 0,
        answeredCorrectly: false
    },
    {
        question: "AI ย่อมาจากอะไร?",
        answers: ["Automation Intelligence", "Artificial Intelligence", "Automation Information", "Artificial Information"],
        correctAnswer: 1,
        answeredCorrectly: false
    }
];

function checkAnswer(questionIndex, answerIndex) {
    const question = questions[questionIndex];
    const feedbackElement = document.getElementById(`question${questionIndex + 1}-feedback`);

    if (!question.answeredCorrectly) {
        const correctAnswerIndex = question.correctAnswer;
        if (answerIndex === correctAnswerIndex) {
            totalScore++;
            question.answeredCorrectly = true;
            feedbackElement.textContent = "Correct!";
            feedbackElement.classList.remove("incorrect");
            feedbackElement.classList.add("correct");
        } else {
            feedbackElement.textContent = "Incorrect! Try again.";
            feedbackElement.classList.remove("correct");
            feedbackElement.classList.add("incorrect");
        }
        updateScore();
    }
}

function updateScore() {
    const scoreElement = document.getElementById('total-score');
    scoreElement.textContent = totalScore;
}

function refreshPage() {
    totalScore = 0;
    questions.forEach(question => {
        question.answeredCorrectly = false;
    });

    document.getElementById("question1-feedback").textContent = "";
    document.getElementById("question2-feedback").textContent = "";

    updateScore();
}
