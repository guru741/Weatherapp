<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <title>Weather App</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <section class="container">
      <!-- input field search  -->
      <div class="weather_header">
        <form class="weather_search">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            class="city_name"
            placeholder="search your city..."
          />
        </form>
      </div>
      <!-- weather main data -->
      <div class="weather_body">
        <h1 class="weather_city"></h1>
        <p class="weather_date_time"></p>
        <div class="weather_data">
          <p class="weather_forecast"></p>
          <div class="weather_icon"></div>
        </div>
        <p class="weather_temperature"></p>
        <div class="weather_minmax">
          <p class="weather_min"></p>
          <p class="weather_max"></p>
        </div>
      </div>
      <!-- weather extra data  -->


      <section class="weather_info">
        <div class="weather_card">
          <i class="fa-solid fa-droplet"></i>
          <div>
            <p>Feels Like</p>
            <p class="weather_feelsLike">15&#176</p>
          </div>
        </div>

        <div class="weather_card">
          <i class="fa-solid fa-droplet"></i>
          <div>
              <p>Humidity</p>
              <p class="weather_humidity">15&#176</p>
          </div>
      </div>

      <div class="weather_card">
        <i class="fa-solid fa-wind"></i>
        <div>
            <p>Wind</p>
            <p class="weather_wind">15&#176</p>
        </div>
    </div>
    
    <div class="weather_card">
      <i class="fa-solid fa-gauge-high"></i>
      <div>
          <p>Pressure</p>
          <p class="weather_pressure">15&#176</p>
      </div>
  </div>

      </section>
    </section>
    <script src="index.js"></script>
  </body>
</html>

