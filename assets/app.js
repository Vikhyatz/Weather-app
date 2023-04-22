const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather-head")
const main_details = document.querySelector("#result")


const getWeather = async (city) => {
    weather.innerHTML = `<h2> Loading... <h2>`
    main_details.innerHTML = `<h2> Loading... <h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    const data = await response.json()
    console.log(data)
    return showWeather(data)
}


const showWeather = (data) => {
    if (data.cod == "404") {
        weather.innerHTML = `<h2> City Not Found <h2>`
        main_details.innerHTML = `<h2> City Not Found <h2>`
        return;
    }
    const search_value = document.querySelector("#search").value
    weather.innerHTML = `
    <div id="weather-place">
            <h1 id="place">${search_value}</h1>
            <h3 id="temp">${data.main.temp}℃</h3>
        </div>
        <div class="weather-type">
            <i id="icon" class="fa-solid fa-sun"></i>
            <span id="type">${data.weather[0].main}</span>
        </div>
        `
    main_details.innerHTML = `
        <p>Temperature = ${data.main.temp}℃ </p>
        <p>Feels like = ${data.main.feels_like}℃ </p>
        <p>Maximum temperature = ${data.main.temp_max}℃ </p>
        <p>Minimum temperature = ${data.main.temp_min}℃ </p>
        <p>Humidity = ${data.main.humidity} </p>
        <p>Wind speed = ${data.wind.speed} </p>
    `
}

form.addEventListener(
    "submit",
    function (event) {
        getWeather(search.value)
        event.preventDefault();


        // for mobile devices

        function myFunction(x) {
            if (x.matches) { // If media query matches
                right.style.cssText = `
                top: 100vh;
                transition: 0.3s;
                `
            }
        }

        var x = window.matchMedia("(max-width: 768px)")
        myFunction(x) // Call listener function at run time
        x.addListener(myFunction)

        // for mobile devices


        setTimeout(() => {
            let type = document.getElementById('type')
            let body = document.querySelector('body')

            if (type.innerHTML == 'Clear') {
                body.style.cssText = `
                    background: url(../assets/images/clear.avif);
                    background-repeat: no-repeat;
                    background-size: cover;
                    `
            }
            if (type.innerHTML == 'Rain') {
                let icon = document.getElementById('icon')
                icon.classList.remove('fa-sun')
                icon.classList.add('fa-cloud-rain')

                body.style.cssText = `
                    background: url(../assets/images/rain.avif);
                    background-repeat: no-repeat;
                    background-size: cover;
                    `
            }
            if (type.innerHTML == 'Clouds') {
                let icon = document.getElementById('icon')
                icon.classList.remove('fa-sun')
                icon.classList.add('fa-cloud-sun')

                body.style.cssText = `
                    background: url(../assets/images/cloudy.avif);
                    background-repeat: no-repeat;
                    background-size: cover;
                    `
            }
            if (type.innerHTML == 'Smoke') {
                let icon = document.getElementById('icon')
                icon.classList.remove('fa-sun')
                icon.classList.add('fa-smog')

                body.style.cssText = `
                    background: url(../assets/images/smoke.avif);
                    background-repeat: no-repeat;
                    background-size: cover;
                    `
            }
            if (type.innerHTML == 'Haze') {
                let icon = document.getElementById('icon')
                icon.classList.remove('fa-sun')
                icon.classList.add('fa-smog')

                body.style.cssText = `
                    background: url(../assets/images/haze.avif);
                    background-repeat: no-repeat;
                    background-size: cover;
                    `
            }
            if (type.innerHTML == 'Snow') {
                let icon = document.getElementById('icon')
                icon.classList.remove('fa-sun')
                icon.classList.add('fa-snowflake')

                body.style.cssText = `
                    background: url(../assets/images/snow.avif);
                    background-repeat: no-repeat;
                    background-size: cover;
                    `
            }
            if (type.innerHTML == 'Mist') {
                let icon = document.getElementById('icon')
                icon.classList.remove('fa-sun')
                icon.classList.add('fa-tint')

                body.style.cssText = `
                    background: url(../assets/images/rain.avif);
                    background-repeat: no-repeat;
                    background-size: cover;
                    `
            }
            if (type.innerHTML == 'Fog') {
                let icon = document.getElementById('icon')
                icon.classList.remove('fa-sun')
                icon.classList.add('fa-cloud-sun')

                body.style.cssText = `
                    background: url(../assets/images/fog.avif);
                    background-repeat: no-repeat;
                    background-size: cover;
                    `
            }
            if (type.innerHTML == 'Drizzle') {
                let icon = document.getElementById('icon')
                icon.classList.remove('fa-sun')
                icon.classList.add('fa-tint')

                body.style.cssText = `
                    background: url(../assets/images/drizzle.avif);
                    background-repeat: no-repeat;
                    background-size: cover;
                    `
            }

        }, 1000);
    }
)

let searcher = document.getElementById('searcher')
searcher.addEventListener(
    'click',
    function (event) {

        // for mobile devices

        function myFunction(x) {
            if (x.matches) { // If media query matches
                right.style.cssText = `
                top: 100vh;
                transition: 0.3s;
                `
            }
        }

        var x = window.matchMedia("(max-width: 768px)")
        myFunction(x) // Call listener function at run time
        x.addListener(myFunction)

        // for mobile devices

        getWeather(search.value)
        event.preventDefault();

        setTimeout(() => {
            let type = document.getElementById('type')
            let body = document.querySelector('body')

            if (type.innerHTML == 'Clear') {
                body.style.cssText = `
                    background: url(../assets/images/clear.avif);
                    background-repeat: no-repeat;
                    background-size: cover;
                    `
            }
            if (type.innerHTML == 'Rain') {
                let icon = document.getElementById('icon')
                icon.classList.remove('fa-sun')
                icon.classList.add('fa-cloud-rain')

                body.style.cssText = `
                    background: url(../assets/images/rain.avif);
                    background-repeat: no-repeat;
                    background-size: cover;
                    `
            }
            if (type.innerHTML == 'Clouds') {
                let icon = document.getElementById('icon')
                icon.classList.remove('fa-sun')
                icon.classList.add('fa-cloud-sun')

                body.style.cssText = `
                    background: url(../assets/images/cloudy.avif);
                    background-repeat: no-repeat;
                    background-size: cover;
                    `
            }
            if (type.innerHTML == 'Smoke') {
                let icon = document.getElementById('icon')
                icon.classList.remove('fa-sun')
                icon.classList.add('fa-smog')

                body.style.cssText = `
                    background: url(../assets/images/smoke.avif);
                    background-repeat: no-repeat;
                    background-size: cover;
                    `
            }
            if (type.innerHTML == 'Haze') {
                let icon = document.getElementById('icon')
                icon.classList.remove('fa-sun')
                icon.classList.add('fa-smog')

                body.style.cssText = `
                    background: url(../assets/images/haze.avif);
                    background-repeat: no-repeat;
                    background-size: cover;
                    `
            }
            if (type.innerHTML == 'Snow') {
                let icon = document.getElementById('icon')
                icon.classList.remove('fa-sun')
                icon.classList.add('fa-snowflake')

                body.style.cssText = `
                    background: url(../assets/images/snow.avif);
                    background-repeat: no-repeat;
                    background-size: cover;
                    `
            }
            if (type.innerHTML == 'Mist') {
                let icon = document.getElementById('icon')
                icon.classList.remove('fa-sun')
                icon.classList.add('fa-tint')

                body.style.cssText = `
                    background: url(../assets/images/rain.avif);
                    background-repeat: no-repeat;
                    background-size: cover;
                    `
            }
            if (type.innerHTML == 'Fog') {
                let icon = document.getElementById('icon')
                icon.classList.remove('fa-sun')
                icon.classList.add('fa-cloud-sun')

                body.style.cssText = `
                    background: url(../assets/images/fog.avif);
                    background-repeat: no-repeat;
                    background-size: cover;
                    `
            }
            if (type.innerHTML == 'Drizzle') {
                let icon = document.getElementById('icon')
                icon.classList.remove('fa-sun')
                icon.classList.add('fa-tint')

                body.style.cssText = `
                    background: url(../assets/images/drizzle.avif);
                    background-repeat: no-repeat;
                    background-size: cover;
                    `
            }

        }, 1000);

    }
)


function load() {
    city = 'london'
    getWeather(city)
    setTimeout(() => {
        document.getElementById('place').innerHTML = 'London'
        let type = document.getElementById('type')
        let body = document.querySelector('body')

        if (type.innerHTML == 'Clear') {
            body.style.cssText = `
                    background: url(../assets/images/clear.avif);
                    background-repeat: no-repeat;
                    background-size: cover;
                    `
        }
        if (type.innerHTML == 'Rain') {
            let icon = document.getElementById('icon')
            icon.classList.remove('fa-sun')
            icon.classList.add('fa-cloud-rain')

            body.style.cssText = `
                    background: url(../assets/images/rain.avif);
                    background-repeat: no-repeat;
                    background-size: cover;
                    `
        }
        if (type.innerHTML == 'Clouds') {
            let icon = document.getElementById('icon')
            icon.classList.remove('fa-sun')
            icon.classList.add('fa-cloud-sun')

            body.style.cssText = `
                    background: url(../assets/images/cloudy.avif);
                    background-repeat: no-repeat;
                    background-size: cover;
                    `
        }
        if (type.innerHTML == 'Smoke') {
            let icon = document.getElementById('icon')
            icon.classList.remove('fa-sun')
            icon.classList.add('fa-smog')

            body.style.cssText = `
                    background: url(../assets/images/smoke.avif);
                    background-repeat: no-repeat;
                    background-size: cover;
                    `
        }
        if (type.innerHTML == 'Haze') {
            let icon = document.getElementById('icon')
            icon.classList.remove('fa-sun')
            icon.classList.add('fa-smog')

            body.style.cssText = `
                    background: url(../assets/images/haze.avif);
                    background-repeat: no-repeat;
                    background-size: cover;
                    `
        }
        if (type.innerHTML == 'Snow') {
            let icon = document.getElementById('icon')
            icon.classList.remove('fa-sun')
            icon.classList.add('fa-snowflake')

            body.style.cssText = `
                    background: url(../assets/images/snow.avif);
                    background-repeat: no-repeat;
                    background-size: cover;
                    `
        }
        if (type.innerHTML == 'Mist') {
            let icon = document.getElementById('icon')
            icon.classList.remove('fa-sun')
            icon.classList.add('fa-tint')

            body.style.cssText = `
                    background: url(../assets/images/rain.avif);
                    background-repeat: no-repeat;
                    background-size: cover;
                    `
        }
        if (type.innerHTML == 'Fog') {
            let icon = document.getElementById('icon')
            icon.classList.remove('fa-sun')
            icon.classList.add('fa-cloud-sun')

            body.style.cssText = `
                    background: url(../assets/images/fog.avif);
                    background-repeat: no-repeat;
                    background-size: cover;
                    `
        }
        if (type.innerHTML == 'Drizzle') {
            let icon = document.getElementById('icon')
            icon.classList.remove('fa-sun')
            icon.classList.add('fa-tint')

            body.style.cssText = `
                background: url(../assets/images/drizzle.avif);
                background-repeat: no-repeat;
                background-size: cover;
                `
        }
        
    }, 800);
}


let responsive_search = document.getElementById('mobile-search')
let right = document.getElementById('right')


responsive_search.addEventListener('click', () => {
    right.style.cssText = `
    top: 0;
    transition: 0.3s;
    `
})

let responsive_search_inverse = document.getElementById('mobile-search-inverse')
responsive_search_inverse.addEventListener('click', () => {
    right.style.cssText = `
    top: 100vh;
    transition: 0.3s;
    `
})