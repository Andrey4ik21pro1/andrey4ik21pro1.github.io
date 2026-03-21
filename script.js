import "@material/web/icon/icon.js";
import "@material/web/button/filled-tonal-button.js";

function showPage(id) {
    document.querySelectorAll(".page").forEach(page => {
        page.style.display = page.id === id ? "block" : "none";
    });
    document.querySelectorAll(".nav-link").forEach(link => {
        link.classList.toggle("active", link.dataset.page === id);
    });
}

function initApp() {
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", function () {
            showPage(this.dataset.page);
        });
    });
    showPage("home");
}

window.addEventListener("DOMContentLoaded", initApp);