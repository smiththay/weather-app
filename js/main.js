const inputZip = document.getElementById("zipSearch");
const button = document.getElementById("button");
const city = document.getElementById('city');
const tempK = document.getElementById('tempK');
const tempF = document.getElementById('tempF');
const tempC = document.getElementById('tempC');
const description = document.getElementById('description')
const icons = document.getElementById('icons');

let zip = "";
let data ="";

button.addEventListener('click', getWeather);

function getWeather(){

    let zip = document.getElementById('zipSearch').value;
    apiKey= "8115cfaacb8cef870e290650830cfc00";
    apiUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},&appid=${apiKey}`
  

    fetch(apiUrl)
        .then(function(response){
        return response.json();
        })
        .then(function(json) {
            data = json
            city.innerHTML = data.name;
            tempK.innerHTML = data.main.temp + " k"
            tempF.innerHTML = Math.round((data.main.temp - 273.15) * 9 / 5 + 32) + ' F'
            tempC.innerHTML = Math.round(json.main.temp - 273.15) + ' C'
            description.innerHTML = data.weather[0].description
            icons.src = 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png';
        })
        .catch(function(error){
            console.error('Error:', error);
        
        });
        
    }

