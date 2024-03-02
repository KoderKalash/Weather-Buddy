// document.getElementById("background").playbackRate = 0.6;

const container = document.querySelector('.container');
const search = document.querySelector('.search button');
const weatherbox = document.querySelector('.weatherbox');
const weatherdetails = document.querySelector('.weatherdetails');

search.addEventListener('click', () => {
    const APIkey = '0a5347e0eb6df91a1b10b6811fd593e6';
    const city = document.querySelector('.search input').value;

    if (city == '')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`).then(response => response.json()).then(json => {
        const image = document.querySelector('.weatherbox img');
        const temperature = document.querySelector('.weatherbox .temperature');
        const description = document.querySelector('.weatherbox .desc');
        const humidity = document.querySelector('.weatherdetails .humidity span');
        const wind = document.querySelector('.weatherdetails .wind span');


        switch (json.weather[0].main) {
            case 'Clear':
                image.src = 'clear.png';
                break;
            case 'Rain':
                image.src = 'rain.png';
                break;
            case 'Snow':
                image.src = 'snow.png';
                break;
            case 'Cloud':
                image.src = 'cloud.png';
                break;
            case 'Mist':
                image.src = 'mist.png';
                break;
            case 'Haze':
                image.src = 'mist.png';
                break;
            default:
                image.src = 'cloud.png';

        }

        temperature.innerHTML= `${parseInt(json.main.temp)}<span>°C</span>`;
        description.innerHTML= `${json.weather[0].description}`;
        humidity.innerHTML= `${json.main.humidity}%`;
        wind.innerHTML= `${parseInt(json.wind.speed)}Km/h`;
    });

});