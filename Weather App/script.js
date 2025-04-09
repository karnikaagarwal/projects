const apiKey = "8b56aa3d4ad8d6bb5da13d4c92ba6a8d"; // Replace with your OpenWeatherMap API key

async function getWeather() {
    const city = document.getElementById("cityInput").value;
    if (!city) {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            document.getElementById("cityName").innerText = `Weather in ${data.name}`;
            document.getElementById("temperature").innerText = `Temperature: ${data.main.temp}°C`;
            document.getElementById("weatherCondition").innerText = `Condition: ${data.weather[0].description}`;
            document.getElementById("humidity").innerText = `Humidity: ${data.main.humidity}%`;
            document.getElementById("windSpeed").innerText = `Wind Speed: ${data.wind.speed} m/s`;

            document.getElementById("weatherInfo").style.display = "block";
        } else {
            alert("City not found. Please enter a valid city name.");
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
        alert("Error fetching data. Please try again.");
    }
}
