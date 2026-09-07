const cards = document.querySelectorAll(".testimonial-card");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let currentIndex = 0;

function showTestimonials() {
    if (window.innerWidth <= 600) {
        cards.forEach((card, index) => {
            if (index === currentIndex) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    } else {
        cards.forEach((card) => {
            card.style.display = "block";
        });
    }
}

nextBtn.addEventListener("click", function () {
    if (window.innerWidth <= 600) {
        currentIndex++;

        if (currentIndex >= cards.length) {
            currentIndex = 0;
        }

        showTestimonials();
    }
});

prevBtn.addEventListener("click", function () {
    if (window.innerWidth <= 600) {
        currentIndex--;

        if (currentIndex < 0) {
            currentIndex = cards.length - 1;
        }

        showTestimonials();
    }
});

window.addEventListener("resize", showTestimonials);

showTestimonials();