// script.js

let currentQuestion = 0;
const questions = [
    { 
        question: "هل تعرف الإجابة على هذا؟ ما هو ناتج 5 + 3؟",
        options: ["7... أكيد مش صح!", "8... يا ريت لو كان 9", "9... أقرب من 8 لكن غلط!", "10... شويه كبيرة عليها!"],
        answer: 8, 
        type: "free" 
    },
    { 
        question: "من هو العبقري الذي أسس شركة مايكروسوفت؟",
        options: ["بيل جيتس... اللي فتح لنا كل شيء", "ستيف جوبز... مبدع لكنه مش هو!", "مارك زوكربيرغ... هذا رجل الفيس بوك!", "إيلون ماسك... مش هو يا جماعة!"],
        answer: "بيل جيتس", 
        type: "free" 
    },
    { 
        question: "أي من هذه الأشياء هو كرت شاشة؟ (الاختيار الصحيح هيفرق معاك في الألعاب)",
        options: ["NVIDIA... بطل الألعاب!", "Intel... لا يا حبيبي، هذا معالج", "AMD... مش سهل! بس NVIDIA أقوى", "Qualcomm... هذا معالج موبايل!"],
        answer: "NVIDIA", 
        type: "paid" 
    },
    { 
        question: "كم فريم في الثانية لازم عشان تجرب الألعاب بشكل رائع؟",
        options: ["30... لحد ما يشتغل!", "60... الآن الأمور بدأت تتحسن", "120... لو كنت محترف!", "144... مش مسموح، إلا لو كنت رائد فضاء!"],
        answer: 60, 
        type: "paid" 
    }
];

document.getElementById('free-option').addEventListener('click', () => {
    startQuiz('free');
});

document.getElementById('paid-option').addEventListener('click', () => {
    startQuiz('paid');
});

document.getElementById('next-question').addEventListener('click', () => {
    showNextQuestion();
});

function startQuiz(type) {
    document.querySelector('.options').classList.add('hidden');
    document.getElementById('questions').classList.remove('hidden');
    currentQuestion = 0;
    showNextQuestion(type);
}

function showNextQuestion(type) {
    if (currentQuestion < questions.length) {
        const question = questions[currentQuestion];
        if (question.type === type || type === 'paid') {
            document.getElementById('question-text').textContent = question.question;
            const answerOptions = document.getElementById('answer-options');
            answerOptions.innerHTML = ''; // مسح الخيارات القديمة

            question.options.forEach(option => {
                const optionButton = document.createElement('button');
                optionButton.textContent = option;
                optionButton.addEventListener('click', () => checkAnswer(option, question.answer));
                answerOptions.appendChild(optionButton);
            });

            currentQuestion++;
        }
    } else {
        showResults();
    }
}

function checkAnswer(selectedAnswer, correctAnswer) {
    if (selectedAnswer === correctAnswer) {
        alert("إجابة صحيحة! تمام عليك.");
    } else {
        alert("إجابة خاطئة! جرب تركز أكتر المرة الجاية.");
    }
    showNextQuestion(); // الانتقال للسؤال التالي
}

function showResults() {
    const resultText = document.getElementById('result-text');
    resultText.textContent = "نوع المعالج: Intel Core i7، نوع كرت الشاشة: NVIDIA GTX 1080، عدد الفريمات: 60 (هوا دا الخيار المثالي للجيمرز!).";
    document.getElementById('questions').classList.add('hidden');
    document.getElementById('results').classList.remove('hidden');
}
