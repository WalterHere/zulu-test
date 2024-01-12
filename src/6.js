const axios = require("axios");

async function requestWeather(city) {
  const weatherData = (
    await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9150d89e6ce163b0bccafddf9f2318d2&units=imperial&`
    )
  ).data;

  return weatherData;
}

async function getMinMaxTemperatureCity(cities) {
  const len = cities.length;
  const cityTemps = await Promise.all(cities.map((city) => requestWeather(city)));
  const arrangedData = cityTemps
    .map(({ main: { temp }, name }) => ({ name, temp }))
    .sort((city1, city2) => city2.temp - city1.temp);

  return { highest: arrangedData[0].name, lowest: arrangedData[len - 1].name };
}

module.exports = { getMinMaxTemperatureCity };
