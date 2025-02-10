const questions = [
    { question: "كم يساوي 5 × 6؟", options: ["30", "25", "20"], answer: "30" },
    { question: "ما هو أسرع معالج في 2024؟", options: ["Intel i9", "Ryzen 9", "Pentium 4"], answer: "Intel i9" },
    { question: "كم عدد أنوية كرت الشاشة RTX 4090؟", options: ["16384", "1024", "4096"], answer: "16384" }
];

let currentQuestion = 0;

function loadQuestion() {
    const q = questions[currentQuestion];
    document.getElementById("question").innerText = q.question;
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
    q.options.forEach(option => {
        const btn = document.createElement("button");
        btn.innerText = option;
        btn.onclick = () => checkAnswer(option);
        optionsDiv.appendChild(btn);
    });
}

function checkAnswer(answer) {
    if (answer === questions[currentQuestion].answer) {
        alert("إجابة صحيحة!");
    } else {
        alert("إجابة خاطئة!");
    }
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        alert("تم الانتهاء! سيتم تحديد كرت الشاشة في رأسك قريبًا.");
        window.location.href = "result.html"; // توجيه إلى صفحة النتيجة
    }
}

window.onload = loadQuestion;
