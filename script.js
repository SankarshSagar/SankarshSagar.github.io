// script.js

// DARK / LIGHT MODE TOGGLE
const toggleThemeBtn = document.getElementById("toggle-theme");
toggleThemeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        toggleThemeBtn.textContent = "☀️ Light Mode";
    } else {
        toggleThemeBtn.textContent = "🌙 Dark Mode";
    }
});

// SCROLL-TO-TOP BUTTON
const scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
    scrollBtn.style.display = (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)
        ? "block" : "none";
};

scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// SMOOTH SCROLL ON NAV LINKS (optional)
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        } else {
            window.location.href = this.getAttribute("href"); // fallback
        }
    });
});
