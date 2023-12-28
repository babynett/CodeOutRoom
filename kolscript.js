document.addEventListener('DOMContentLoaded', function () {
    const quizForm = document.getElementById('quizForm');
    quizForm.addEventListener('submit', function (e) {
        e.preventDefault();
        checkAnswer();
    });
});

function checkAnswer() {
    const answer = document.getElementById('answer').value;
    const resultDiv = document.getElementById('result');

    if (answer === 'Ben') {
        resultDiv.innerHTML = 'You got the right person!';
    } else if (answer === 'Help') {
        resultDiv.innerHTML = 'The worst c0trauma NTcan change rus n0t onLy mentaLly, +emotionally, Abut also physically.';
    }
}
