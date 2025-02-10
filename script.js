const questions = [
    { question: "كم حاصل ضرب 5 × 6؟", answers: ["30", "25", "35"], correct: "30" },
    { question: "ما هو أكبر كوكب في المجموعة الشمسية؟", answers: ["المريخ", "زحل", "المشتري"], correct: "المشتري" },
    { question: "من هو مؤسس شركة مايكروسوفت؟", answers: ["إيلون ماسك", "بيل غيتس", "مارك زوكربيرغ"], correct: "بيل غيتس" }
];

let currentQuestionIndex = 0;
let score = 0;
let startTime;

function startQuiz() {
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    startTime = Date.now();
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestionIndex >= 3) {
        showResult();
        return;
    }

    const questionData = questions[Math.floor(Math.random() * questions.length)];
    document.getElementById("question-text").textContent = questionData.question;
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";
    
    questionData.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.classList.add("answer-button");
        button.onclick = () => checkAnswer(answer, questionData.correct);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedAnswer, correctAnswer) {
    const feedback = document.getElementById("feedback");
    if (selectedAnswer === correctAnswer) {
        feedback.textContent = "✔️ إجابة صحيحة!";
        feedback.style.color = "green";
        score++;
    } else {
        feedback.textContent = "❌ إجابة خاطئة! حاول مرة أخرى.";
        feedback.style.color = "red";
        setTimeout(loadQuestion, 1000);
        return;
    }

    currentQuestionIndex++;
    setTimeout(loadQuestion, 1000);
}

function showResult() {
    const timeTaken = Math.floor((Date.now() - startTime) / 1000);
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("result-screen").style.display = "block";

    let resultText = "";
    if (score === 3 && timeTaken <= 10) {
        resultText = "🔥 معالجك هو Intel Core i9 + RTX 4090!";
    } else if (score === 3) {
        resultText = "⚡ معالجك هو Intel Core i7 + RTX 3060!";
    } else if (score === 2) {
        resultText = "🔹 معالجك هو Ryzen 5 + GTX 1660!";
    } else {
        resultText = "🐌 معالجك هو Intel Pentium + GT 710 😂";
    }

    document.getElementById("result-text").textContent = resultText;

    document.getElementById("share-button").onclick = () => {
        const shareText = `لقد حصلت على ${resultText} في اختبار كرت الشاشة!`;
        const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
        window.open(shareUrl, "_blank");
    };
}
