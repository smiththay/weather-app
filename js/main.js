const inputZip = document.getElementById("zipSearch");
const button = document.getElementById("button");
const city = document.getElementById('city');
const temp = document.getElementById('temp');
const description = document.getElementById('description')

let apiKey="";
let apiUrl="";
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
            temp.innerHTML = data.main.temp
            description.innerHTML = data.weather[0].description


        })
        .catch(function(error){
            console.error('Error:', error);
        
        });
        
    }

