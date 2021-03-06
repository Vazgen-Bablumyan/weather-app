let weather = {
    "appKey": "8a8b3d206c1144641fbe45db04a1e712",
    fetchWeather: function (city) {

        fetch("https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&lon={lon}&appid="
            + this.appKey
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data))
            .catch((error) => alert("a city called " + city + " not found"))



    },
    displayWeather: function (data) {
        console.log(data)
        const { name, sys } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;

        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".country-code").innerText = "Country code " + sys.country;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + " %";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"


    },

    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value)
    }

};

document.querySelector(".search button").addEventListener("click", function () {
    weather.search()
})

document.querySelector(".search-bar").addEventListener("keyup", function (evt) {
    if (evt.key === "Enter") {
        weather.search()
    }
})

weather.fetchWeather("Yerevan")

