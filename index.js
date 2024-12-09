// حساب تكلفة الهاتف بالتقسيط
function calculatePhoneCost() {
    const price = parseFloat(document.getElementById("price").value);
    const years = parseInt(document.getElementById("years").value);

    if (isNaN(price) || isNaN(years) || price <= 0 || years <= 0) {
        alert("يرجى إدخال قيم صحيحة لسعر الهاتف وعدد السنوات.");
        return;
    }

    const annualInterestRate = 0.20;
    const totalInterest = price * annualInterestRate * years;
    const totalAmount = price + totalInterest;
    const months = years * 12;
    const monthlyInstallment = totalAmount / months;

    // عرض النتائج في الصفحة
    document.getElementById("totalInterest").textContent =` إجمالي الفائدة: ${totalInterest.toFixed(2)} ريال`;
    document.getElementById("totalAmount").textContent =` إجمالي المبلغ الذي سيدفعه المشتري: ${totalAmount.toFixed(2)} ريال`;
    document.getElementById("monthlyInstallment").textContent =` القسط الشهري: ${monthlyInstallment.toFixed(2)} ريال`;
}

// تبديل الوضع الليلي
function toggleDarkMode() {
    const body = document.body;
    const isDarkMode = body.classList.toggle("dark-mode");

    // تحديث نص الزر
    const darkModeToggle = document.getElementById("darkModeToggle");
    darkModeToggle.textContent = isDarkMode ? "إلغاء الوضع الليلي" : "تفعيل الوضع الليلي";

    // تخزين حالة الوضع الليلي في Local Storage
    localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
}

// استعادة حالة الوضع الليلي عند تحميل الصفحة
window.onload = function() {
    const darkModeState = localStorage.getItem("darkMode");

    if (darkModeState === "enabled") {
        document.body.classList.add("dark-mode");
        document.getElementById("darkModeToggle").textContent = "إلغاء الوضع الليلي";
    } else {
        document.body.classList.remove("dark-mode");
        document.getElementById("darkModeToggle").textContent = "تفعيل الوضع الليلي";
    }
}