/* =========================
   DARK / LIGHT MODE
========================= */

function toggleTheme() {

    document.body.classList.toggle("light");

    const themeButton =
        document.getElementById("themeBtn");

    if (
        document.body.classList.contains("light")
    ) {

        themeButton.textContent = "☀️";

        localStorage.setItem("theme", "light");

    } else {

        themeButton.textContent = "🌙";

        localStorage.setItem("theme", "dark");
    }
}


/* =========================
   REMEMBER THEME
========================= */

const savedTheme =
    localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light");

    document.getElementById("themeBtn")
        .textContent = "☀️";
}


/* =========================
   SMOOTH SCROLL
========================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(link => {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


/* =========================
   WELCOME MESSAGE
========================= */

window.addEventListener(
    "load",
    () => {

        console.log(
            "Welcome to Bhagyasree's Portfolio!"
        );

    }
);