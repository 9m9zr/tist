let currentQuestion = 0;
let startTime;
let times = []; // لتخزين أوقات الإجابة

const questions = [
    { text: "كم حاصل ضرب 7 × 8؟", options: ["54", "56"], correct: 1 },
    { text: "ما هو الجذر التربيعي لـ 144؟", options: ["10", "12"], correct: 1 }
];

function loadQuestion() {
    if (currentQuestion < questions.length) {
        document.getElementById("question").innerText = questions[currentQuestion].text;
        startTime = new Date().getTime(); // بدء توقيت السؤال
    } else {
        showResult();
    }
}

function answerQuestion(choice) {
    let endTime = new Date().getTime();
    let timeTaken = (endTime - startTime) / 1000; // الوقت بالثواني
    times.push(timeTaken);

    currentQuestion++;
    loadQuestion();
}

function showResult() {
    let avgTime = times.reduce((a, b) => a + b, 0) / times.length;
    let result = avgTime < 3 ? "🚀 لديك عقل i9-14900K!" : "🐢 لديك عقل Pentium 4!";
    
    document.body.innerHTML = `<h1>نتيجتك:</h1><p>${result}</p><p>زمن إجابتك: ${avgTime.toFixed(2)} ثانية</p>`;
}

// تحميل السؤال الأول عند فتح الصفحة
window.onload = loadQuestion;
