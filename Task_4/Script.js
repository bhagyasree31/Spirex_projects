const billingToggle = document.getElementById("billingToggle");

const amounts = document.querySelectorAll(".amount");

const monthlyText = document.getElementById("monthlyText");
const yearlyText = document.getElementById("yearlyText");


billingToggle.addEventListener("change", function () {

    if (this.checked) {

        // Yearly pricing
        amounts.forEach(function (amount) {

            amount.textContent = amount.dataset.yearly;

        });

        monthlyText.classList.remove("active");
        yearlyText.classList.add("active");

    } else {

        // Monthly pricing
        amounts.forEach(function (amount) {

            amount.textContent = amount.dataset.monthly;

        });

        yearlyText.classList.remove("active");
        monthlyText.classList.add("active");

    }

});


function selectPlan(plan) {

    alert(
        "You selected the " +
        plan +
        " plan. Thank you for choosing PricePro!"
    );

}


function contactUs() {

    alert(
        "Thank you for your interest! Our team will contact you soon.If u any Queries our contact number is 7993596702."
    );

}