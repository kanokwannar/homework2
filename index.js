let totalScore = 0;
let question1Answered = false;
let question2Answered = false;

function checkAnswer(questionNum, selectedAnswer) {
    if (questionNum === 1 && !question1Answered) {
        evaluateAnswer(questionNum, selectedAnswer, 'pim');
        question1Answered = true; // ทำเครื่องหมายว่าคำถาม 1 ได้รับการตอบแล้ว
    } else if (questionNum === 2 && !question2Answered) {
        evaluateAnswer(questionNum, selectedAnswer, 'AI');
        question2Answered = true; // ทำเครื่องหมายว่าคำถาม 2 ได้รับการตอบแล้ว
    } 
}

function evaluateAnswer(questionNum, selectedAnswer, correctAnswer) {
    let questionAnswered;

    if (questionNum === 1) {
        questionAnswered = question1Answered; // ตรวจสอบว่ามีการตอบคำถาม 1 แล้วหรือไม่
    } else if (questionNum === 2) {
        questionAnswered = question2Answered; // ตรวจสอบว่ามีการตอบคำถาม 2 แล้วหรือไม่
    }

    if (!questionAnswered) {
        const buttonClass = selectedAnswer === correctAnswer ? 'answer' : 'wrong';
        document.querySelector('.' + buttonClass + questionNum).classList.add('selected');
        
        if (selectedAnswer === correctAnswer) {
            totalScore += 1;
        } else {
            totalScore = Math.max(0, totalScore - 1);
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
    question1Answered = false; // รีเซ็ตสถานะการตอบคำถาม 1
    question2Answered = false; // รีเซ็ตสถานะการตอบคำถาม 2
    updateScore();
}
