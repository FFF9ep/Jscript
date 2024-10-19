const apiKey = 'YOUR_OPENWEATHER_API_KEY';
const weatherDisplay = document.getElementById('weather');

function getWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            weatherDisplay.innerHTML = `
                <h2>${data.name}</h2>
                <p>Suhu: ${data.main.temp}°C</p>
                <p>Kelembapan: ${data.main.humidity}%</p>
                <p>Cuaca: ${data.weather[0].description}</p>
            `;
        })
        .catch(error => console.error('Error fetching weather data:', error));
}

document.getElementById('searchButton').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;
    getWeather(city);
});
