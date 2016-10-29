import Keys from '../../config/api';

export default function (cityName) {
    let apiURL = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${Keys.openWeatherMap}&units=metric`;
    return fetch(apiURL)
        .then(response => response.json());
}
