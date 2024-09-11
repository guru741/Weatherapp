let cityName = document.querySelector(".weather_city");
let dateTime = document.querySelector(".weather_date_time");
let w_forecast = document.querySelector(".weather_forecast");
let w_icon = document.querySelector(".weather_icon");
let w_temperature = document.querySelector(".weather_temperature");
let w_minTem = document.querySelector(".weather_min");
let w_maxTem = document.querySelector(".weather_max");


let w_feelsLike = document.querySelector(".weather_feelsLike");
let w_humidity = document.querySelector(".weather_humidity");
let w_wind = document.querySelector(".weather_wind");
let w_pressure = document.querySelector(".weather_pressure");

let citySearch = document.querySelector(".weather_search");

// to get the actual country name
const getCountryName = (code) => {
  return new Intl.DisplayNames([code],{type:"region"}).of(code);
};


// to get the date and time
const getDateTime = (dt) => {
  const curDate = new Date(dt * 1000);

const options =  {
  weekday:"long",
  year: "numeric",
  month:"long",
  day:"numeric",
  hour:"numeric",
  minute:"numeric",
};


  const formatter = new Intl.DateTimeFormat("en-US",options);

  return formatter.format(curDate);
};


let city = "mumbai";
// search functionality
citySearch.addEventListener("submit", (e) => {
  e.preventDefault();

  let cityName = document.querySelector(".city_name");
  console.log(cityName.value);
  city = cityName.value;

  getWeatherData();

  cityName.value = "";
});


//define the getWeather function here
const getWeatherData = async () => {
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=a0b06669a793506ae54060f7df8a5fb6`;
  try {
    const res = await fetch(weatherUrl);
    const data = await res.json();
    // console.log(data);
    
    const { main, name , weather, wind, sys, dt } = data;

    cityName.innerHTML = `${name},${getCountryName(sys.country)}`;
    dateTime.innerHTML = getDateTime(dt);
    console.log(data);
    

    w_forecast.innerHTML = weather[0].main;
    w_icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${weather[0].icon}@4x.png"/>`;

    w_temperature.innerHTML = `${main.temp.toFixed()-273}&#176`;
    w_minTem.innerHTML = `Min: ${main.temp_min.toFixed()-273}&#176`;
    w_maxTem.innerHTML = `Max: ${main.temp_max.toFixed()-273}&#176`;


    w_feelsLike.innerHTML = `${main.feels_like.toFixed()-273}&#176`;
    w_humidity.innerHTML = `${main.humidity.toFixed()}&#176`;
    w_wind.innerHTML = `${wind.speed} m/s`;
    w_pressure.innerHTML = `${main.pressure} hpa`;

  }catch(error) {
    cityName.innerHTML = "Sorry Your API is wrong";
    dateTime.innerHTML = "";
    w_forecast.innerHTML = "";
    w_icon.innerHTML = "";
    w_temperature.innerHTML = "";
    w_minTem.innerHTML = "";
    w_maxTem.innerHTML = "";

    w_feelsLike.innerHTML = "";
    w_humidity.innerHTML = "";
    w_wind.innerHTML = "";
    w_pressure.innerHTML = "";

    // console.log("I am sorry API is wrong");
    // console.log(error);
  }
};
  
const bodyPart =  document.body.addEventListener("load", getWeatherData());
