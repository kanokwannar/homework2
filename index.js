let totalScore = 0;
let question1Answered = false;
let question2Answered = false;

function checkAnswer(questionNum, selectedAnswer) {
    if (questionNum === 1) {
        evaluateAnswer(questionNum, selectedAnswer);
    } else if (questionNum === 2) {
        evaluateAnswer(questionNum, selectedAnswer);
    } 
}

function evaluateAnswer(questionNum, selectedAnswer) {
    let correctAnswer;
    if (questionNum === 1) {
        correctAnswer = 'pim';
    } else if (questionNum === 2) {
        correctAnswer = 'AI';
    }

    if (selectedAnswer === correctAnswer) {
        totalScore += 1;
        updateScore();
    } else {
        if (totalScore > 0){
            totalScore -= 1;
            updateScore();
        }
    }
}


function updateScore() {
    const scoreElement = document.getElementById('total-score');
    scoreElement.textContent = totalScore;
}
