const key = "72f7d6fc19dbbddbe8119643141f3f85";
const api = "https://api.openweathermap.org/data/2.5/";

const form = document.querySelector(".form");
const form_input = document.querySelector(".weather");
const weather_box = document.querySelector(".weather-information");
const icon = document.querySelector(".weather-icon");
const city = document.querySelector(".city");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputValue = form_input.value;

    if(inputValue === "") {
        alert("Please, write the city name!");
    } else {
        fetch(`${api}weather?q=${inputValue}&units=metric&appid=${key}`)
        .then((res) => res.json())
        .then((data) => getWeather(data))
        .catch((error) => console.log(error));

        form_input.value = "";
        weather_box.style.display = "flex";
    }
});

function getWeather(data) {
    city.textContent = `${data.name}, ${data.sys.country}`;
    temp.textContent = `${Math.round(data.main.temp)}°C`;
    humidity.textContent = `${data.main.humidity}%`;
    wind.textContent = `${data.wind.speed}m/s`

    if(data.weather[0].main == "Clouds") {
        icon.src = "./assets/icons/clouds.png"
    } else if(data.weather[0].main == "Clear") {
        icon.src = "./assets/icons/clear.png"
    } else if(data.weather[0].main == "Rain") {
        icon.src = "./assets/icons/rain.png"
    } else if(data.weather[0].main == "Drizzle") {
        icon.src = "./assets/icons/drizzle.png"
    } else if(data.weather[0].main == "Mist") {
        icon.src = "./assets/icons/mist.png"
    }
}