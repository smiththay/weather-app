
//create all variable that grab ids from HTML
const inputZip = document.getElementById("zipSearch");
const button = document.getElementById("button");
const city = document.getElementById('city');
const tempK = document.getElementById('tempK');
const tempF = document.getElementById('tempF');
const tempC = document.getElementById('tempC');
const description = document.getElementById('description')
const icons = document.getElementById('icons');
//add event listener for the getWeather function 
button.addEventListener('click', getWeather);
//function to get weather
function getWeather(){
    //zip is has been grabbed by zip
    let zip = document.getElementById('zipSearch').value;
    //personal api key
    apiKey= "8115cfaacb8cef870e290650830cfc00";
    //api url with zip and api key as variables to be inputted 
    apiUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},&appid=${apiKey}`
  //fetch api url
    fetch(apiUrl)
        .then(function(response){
            //turns it into JSON
        return response.json();
        })
        .then(function(json) {
            //turns it into data variable
            data = json
            city.innerHTML = data.name;
            tempK.innerHTML = data.main.temp + '°' +' K'
            tempF.innerHTML = Math.round((data.main.temp - 273.15) * 9 / 5 + 32) + '°' + ' F'
            tempC.innerHTML = Math.round(json.main.temp - 273.15) + '°' + ' C'
            description.innerHTML = data.weather[0].description
            icons.src = 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png';
        })//if it is not a valid zip
        .catch(function(error) {
            //alert("Please Enter A Valid Zip!");
            city.innerHTML= "Please Enter A Valid Zip"
        });
        
    }

