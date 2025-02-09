function startTest(type) {
    if (type === 'cpu') {
        window.location.href = "test_cpu.html"; // سينتقل إلى صفحة اختبار المعالج
    } else if (type === 'gpu') {
        window.location.href = "payment.html"; // سينتقل إلى صفحة الدفع أو الإعلانات
    }
}
