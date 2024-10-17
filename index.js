function renderWeather(weather){
    console.log(weather);
    var resultContainer = document.querySelector("#weather-result");

    var city =document.createElement("h2");
    city.textContent = weather.name;
    resultContainer.appendChild(city);
    var temp = document.createElement("p");
    temp.textContent ="Temp: " +weather.main.temp + "F";
    resultContainer.append(temp);

    var  humidity = document.createElement("p");
    humidity.textContent = "Humidity: " + weather.main.humidity  + "%";
    resultContainer.append(humidity);

    var  wind = document.createElement("p");
    wind.textContent = "Wind: " + weather.wind.speed  + "mph, " + weather.wind.deg + "°";
    resultContainer.append(wind);

    var weatherDetails  = weather.weather[0]
    if(weather.Details && weatherDetails.description){
     var description = document.createElement("p");
    description.textContent = weatherDetails.description;
    resultContainer.append(description);
    }
  
}

function fetichWeather(query) {
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=94464265f3e7814ffb227f8fd4a25a3e"
    fetch(url)
    .then((response) => response.json())
    .then((date) => renderWeather(date));

    
}

fetichWeather("Saudi Arabia");
