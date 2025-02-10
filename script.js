const questions = [
    { question: "كم حاصل ضرب 5 × 6؟", answers: ["30", "25", "35"], correct: "30" },
    { question: "ما هو أكبر كوكب في المجموعة الشمسية؟", answers: ["المريخ", "زحل", "المشتري"], correct: "المشتري" },
    { question: "من هو مؤسس شركة مايكروسوفت؟", answers: ["إيلون ماسك", "بيل غيتس", "مارك زوكربيرغ"], correct: "بيل غيتس" }
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showResult();
        return;
    }

    const questionData = questions[currentQuestionIndex];
    document.getElementById("question-text").textContent = questionData.question;

    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";

    questionData.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.classList.add("answer-button");
        button.onclick = () => checkAnswer(answer);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedAnswer) {
    const correctAnswer = questions[currentQuestionIndex].correct;

    if (selectedAnswer === correctAnswer) {
        score++;
    }

    currentQuestionIndex++;
    loadQuestion();
}

function showResult() {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("result-screen").style.display = "block";
    document.getElementById("score").textContent = `نتيجتك: ${score} / ${questions.length}`;

    const shareButton = document.getElementById("share-button");
    shareButton.onclick = () => {
        const shareText = `لقد حصلت على ${score} من ${questions.length} في اختبار تحديد كرت الشاشة!`;
        const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
        window.open(shareUrl, "_blank");
    };
}
