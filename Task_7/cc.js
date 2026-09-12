async function convertCurrency() {

    let amount = document.getElementById("amount").value;
    let from = document.getElementById("fromCurrency").value;
    let to = document.getElementById("toCurrency").value;
    let result = document.getElementById("result");

    if (amount === "" || amount <= 0) {
        result.innerText = "Please enter a valid amount";
        return;
    }

    result.innerText = "Converting...";

    try {
        let response = await fetch(
            `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`
        );

        let data = await response.json();

        let convertedAmount = data.rates[to];

        result.innerText =
            `${amount} ${from} = ${convertedAmount.toFixed(2)} ${to}`;

    } catch (error) {
        result.innerText = "Unable to get exchange rate";
    }
}