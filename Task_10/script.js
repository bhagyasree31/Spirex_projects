const countries = {
    india: {
        name: "India",
        flag: "🇮🇳",
        capital: "New Delhi",
        population: "1.4 Billion",
        region: "Asia",
        currency: "Indian Rupee (INR)",
        image1: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800",
        image2: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800",
        image3: "https://images.unsplash.com/photo-1532664189809-02133fee698d?w=800"
    },

    "united states": {
        name: "United States",
        flag: "🇺🇸",
        capital: "Washington, D.C.",
        population: "340 Million",
        region: "North America",
        currency: "US Dollar (USD)",
        image1: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800",
        image2: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=800",
        image3: "https://images.unsplash.com/photo-1496588152823-86ff7695e68f?w=800"
    },

    "united kingdom": {
        name: "United Kingdom",
        flag: "🇬🇧",
        capital: "London",
        population: "69 Million",
        region: "Europe",
        currency: "Pound Sterling (GBP)",
        image1: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800",
        image2: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=800",
        image3: "https://images.unsplash.com/photo-1520986606214-8b456906c813?w=800"
    },

    canada: {
        name: "Canada",
        flag: "🇨🇦",
        capital: "Ottawa",
        population: "40 Million",
        region: "North America",
        currency: "Canadian Dollar (CAD)",
        image1: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=800",
        image2: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800",
        image3: "https://images.unsplash.com/photo-1519832979-6fa011b87667?w=800"
    },

    australia: {
        name: "Australia",
        flag: "🇦🇺",
        capital: "Canberra",
        population: "27 Million",
        region: "Oceania",
        currency: "Australian Dollar (AUD)",
        image1: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d8?w=800",
        image2: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800",
        image3: "https://images.unsplash.com/photo-1494233892892-84542a694e72?w=800"
    },

    japan: {
        name: "Japan",
        flag: "🇯🇵",
        capital: "Tokyo",
        population: "124 Million",
        region: "Asia",
        currency: "Japanese Yen (JPY)",
        image1: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800",
        image2: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800",
        image3: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800"
    },

    china: {
        name: "China",
        flag: "🇨🇳",
        capital: "Beijing",
        population: "1.4 Billion",
        region: "Asia",
        currency: "Chinese Yuan (CNY)",
        image1: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800",
        image2: "https://images.unsplash.com/photo-1548919973-5cef591cdbc9?w=800",
        image3: "https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?w=800"
    },

    france: {
        name: "France",
        flag: "🇫🇷",
        capital: "Paris",
        population: "68 Million",
        region: "Europe",
        currency: "Euro (EUR)",
        image1: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
        image2: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
        image3: "https://images.unsplash.com/photo-1431274172761-fca41d930114?w=800"
    },

    germany: {
        name: "Germany",
        flag: "🇩🇪",
        capital: "Berlin",
        population: "84 Million",
        region: "Europe",
        currency: "Euro (EUR)",
        image1: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800",
        image2: "https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800",
        image3: "https://images.unsplash.com/photo-1449452198679-05c7fd30f416?w=800"
    },

    italy: {
        name: "Italy",
        flag: "🇮🇹",
        capital: "Rome",
        population: "59 Million",
        region: "Europe",
        currency: "Euro (EUR)",
        image1: "https://images.unsplash.com/photo-1529260830199-42c24126f198?w=800",
        image2: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=800",
        image3: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800"
    },

    brazil: {
        name: "Brazil",
        flag: "🇧🇷",
        capital: "Brasilia",
        population: "216 Million",
        region: "South America",
        currency: "Brazilian Real (BRL)",
        image1: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800",
        image2: "https://images.unsplash.com/photo-1486304873000-235643847519?w=800",
        image3: "https://images.unsplash.com/photo-1544989164-31dc3c645987?w=800"
    },

    russia: {
        name: "Russia",
        flag: "🇷🇺",
        capital: "Moscow",
        population: "144 Million",
        region: "Europe / Asia",
        currency: "Russian Ruble (RUB)",
        image1: "https://images.unsplash.com/photo-1513326738677-b964603b136d?w=800",
        image2: "https://images.unsplash.com/photo-1514905552197-0610a4d8fd73?w=800",
        image3: "https://images.unsplash.com/photo-1547448415-e9f5b28e5e0d?w=800"
    },

    "south korea": {
        name: "South Korea",
        flag: "🇰🇷",
        capital: "Seoul",
        population: "51 Million",
        region: "Asia",
        currency: "South Korean Won (KRW)",
        image1: "https://images.unsplash.com/photo-1538485399081-7c8971eaa5a5?w=800",
        image2: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=800",
        image3: "https://images.unsplash.com/photo-1546874177-9e664107314e?w=800"
    },

    singapore: {
        name: "Singapore",
        flag: "🇸🇬",
        capital: "Singapore",
        population: "6 Million",
        region: "Asia",
        currency: "Singapore Dollar (SGD)",
        image1: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800",
        image2: "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?w=800",
        image3: "https://images.unsplash.com/photo-1496939376851-89342e90adcd?w=800"
    },

    "united arab emirates": {
        name: "United Arab Emirates",
        flag: "🇦🇪",
        capital: "Abu Dhabi",
        population: "10 Million",
        region: "Asia",
        currency: "UAE Dirham (AED)",
        image1: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
        image2: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800",
        image3: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800"
    }
};


function searchCountry() {

    const input = document.getElementById("countryInput");
    const result = document.getElementById("countryResult");
    const message = document.getElementById("message");

    const countryName = input.value.trim().toLowerCase();

    result.style.display = "none";
    message.innerHTML = "";

    if (countryName === "") {
        message.innerHTML = "Please enter a country name.";
        return;
    }

    const country = countries[countryName];

    if (!country) {
        message.innerHTML =
            "Country not found. Please search for one of the 15 supported countries.";
        return;
    }

    result.innerHTML = `

        <div class="country-main">

            <div class="flag">
                ${country.flag}
            </div>

            <div class="country-details">

                <h2>${country.name}</h2>

                <p>
                    <strong>🏙️ Capital:</strong>
                    ${country.capital}
                </p>

                <p>
                    <strong>👥 Population:</strong>
                    ${country.population}
                </p>

                <p>
                    <strong>🌎 Region:</strong>
                    ${country.region}
                </p>

                <p>
                    <strong>💰 Currency:</strong>
                    ${country.currency}
                </p>

            </div>

        </div>

        <h2 class="related-title">
            📸 Related Pictures
        </h2>

        <div class="related-pictures">

            <img src="${country.image1}" alt="${country.name}">
            
            <img src="${country.image2}" alt="${country.name}">
            
            <img src="${country.image3}" alt="${country.name}">

        </div>
    `;

    result.style.display = "block";
}


document.getElementById("countryInput").addEventListener("keypress", function(event) {

    if (event.key === "Enter") {
        searchCountry();
    }

});