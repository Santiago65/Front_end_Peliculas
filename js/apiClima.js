async function fetchWeather (city){
   
    const url = "https://api.openweathermap.org/data/2.5/weather";
   
    const apiKey = "ea291de367fc09d8c82eb790c87c69cd";

    const units = "metric";

    const lang = "es";

    const response = await fetch (`${url}?q=${city}&units=${units}&appid=${apiKey}&lang=${lang}`);

    const data = await response.json ();

    return data;

}
async function updateWeatherCard (city){
  
    const weatherData = await fetchWeather (city);
   
    document.getElementById("city").textContent = weatherData.name;
    document.getElementById("temperature").textContent = weatherData.main.temp;
    document.getElementById("weather").textContent = weatherData.weather[0].description;
    document.getElementById("humidity").textContent = weatherData.main.humidity;

    const iconCode = weatherData.weather[0].icon;

    const iconUrl = `https://api.openweathermap.org/img/w/${iconCode}.png`;

    document.getElementById("weatherIcon").src = iconUrl;
    document.getElementById("weatherIcon").alt = weatherData.weather[0].description;

}
updateWeatherCard ("Buenos Aires");
