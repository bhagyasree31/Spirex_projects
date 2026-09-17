
async function getWeather() {

    const cityInput = document.getElementById("cityInput");
    const city = cityInput.value.trim();

    const message = document.getElementById("message");
    const weatherResult = document.getElementById("weatherResult");

    if (city === "") {

        message.innerHTML = "Please enter a city name.";

        weatherResult.style.display = "none";

        return;
    }

    message.innerHTML = "Loading weather information...";

    try {

        // Get latitude and longitude of the city
        const locationResponse = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`
        );

        const locationData = await locationResponse.json();

        if (!locationData.results) {

            message.innerHTML = "City not found. Please try another city.";

            weatherResult.style.display = "none";

            return;
        }

        const location = locationData.results[0];

        const latitude = location.latitude;
        const longitude = location.longitude;

        // Get weather information
        const weatherResponse = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&timezone=auto`
        );

        const weatherData = await weatherResponse.json();

        const currentWeather = weatherData.current;

        const temperature = currentWeather.temperature_2m;
        const humidity = currentWeather.relative_humidity_2m;
        const windSpeed = currentWeather.wind_speed_10m;
        const weatherCode = currentWeather.weather_code;

        // Get weather condition
        const condition = getWeatherCondition(weatherCode);

        // Display data
        document.getElementById("cityName").innerHTML =
            `${location.name}, ${location.country}`;

        document.getElementById("temperature").innerHTML =
            `${temperature}°C`;

        document.getElementById("humidity").innerHTML =
            `${humidity}%`;

        document.getElementById("wind").innerHTML =
            `${windSpeed} km/h`;

        document.getElementById("condition").innerHTML =
            condition.text;

        document.getElementById("weatherIcon").innerHTML =
            condition.icon;

        weatherResult.style.display = "block";

        message.innerHTML = "";

    } catch (error) {

        console.log(error);

        message.innerHTML =
            "Unable to get weather information. Please try again.";

        weatherResult.style.display = "none";
    }
}


// Convert weather code into weather condition
function getWeatherCondition(code) {

    if (code === 0) {

        return {
            text: "Clear Sky",
            icon: "☀️"
        };

    } else if (code >= 1 && code <= 3) {

        return {
            text: "Partly Cloudy",
            icon: "⛅"
        };

    } else if (code >= 45 && code <= 48) {

        return {
            text: "Foggy",
            icon: "🌫️"
        };

    } else if (code >= 51 && code <= 67) {

        return {
            text: "Rainy",
            icon: "🌧️"
        };

    } else if (code >= 71 && code <= 77) {

        return {
            text: "Snowy",
            icon: "❄️"
        };

    } else if (code >= 80 && code <= 82) {

        return {
            text: "Rain Showers",
            icon: "🌦️"
        };

    } else if (code >= 95) {

        return {
            text: "Thunderstorm",
            icon: "⛈️"
        };

    } else {

        return {
            text: "Unknown Weather",
            icon: "🌤️"
        };
    }
}


// Press Enter to search
document.getElementById("cityInput").addEventListener(
    "keypress",
    function(event) {

        if (event.key === "Enter") {

            getWeather();

        }
    }
);