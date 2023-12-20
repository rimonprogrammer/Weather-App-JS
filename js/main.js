const form = document.getElementById('form');
form.addEventListener('submit', (event)=>{
    event.preventDefault();

    const ariaInfo = event.target.aria.value;
    const api_key = '30f597b8e7d14c619bc04c068898113f';
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ariaInfo}&appid=${api_key}`)
.then(res => res.json())
.then( res => {
    console.log(res)
    document.getElementById('countryName').innerHTML = res.name;
    document.getElementById('temp').innerHTML = Math.round(res.main.temp - 273.15) + '° C';
    document.getElementById('humanity').innerHTML = res.main.humidity + '%';
    document.getElementById('windSpeed').innerHTML = res.wind.speed + ' Km/h';
    document.getElementById('sky').innerHTML = 'Sky: ' + res.weather[0].description;
})

})


