//things to add for resubmit
//nav bar localstorage saved searches
//clean all the unused variables and comments



let apiUrl;
let userInput = ``;
let apiUrl4;
let apiUrl2 = `http://api.openweathermap.org/data/2.5/forecast?q=${userInput}&appid=5c31cfeca21bb4b2fcde410d7f059577&units=imperial`
let apiUrl3 = "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=5c31cfeca21bb4b2fcde410d7f059577"


function apiSearch() {
    fetch(apiUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            console.log(response)


            for (var i = 0; i < 40; (i += 8 - Math.floor(i / 32))) {
                let tempNow = response.list[i].main.temp
                $(`.tempNow${i}`).text(`Temp:` + ` ${tempNow}`)
                let humidityNow = response.list[i].main.humidity
                $(`.humidityNow${i}`).text(`Humidity:` + ` ${humidityNow}`)
                let windSpeed = response.list[i].wind.speed
                $(`.windSpeed${i}`).text(`Wind Speed:` + ` ${windSpeed} MPH`)
                let imageCode = response.list[i].weather[0].icon
                let imageUrl = `https://openweathermap.org/img/wn/${imageCode}@2x.png`
                $(`.card-img-top${i}`).attr("src",imageUrl)
                let currentDateRaw = response.list[i].dt_txt
                let currentDate = currentDateRaw.split(" ")
                $(`.card-title${i}`).text(`${currentDate[0]}`)
                console.log(currentDateRaw)
                console.log(imageUrl)
                console.log(i)
            }

        })
};
function setUrlApi() {
    apiUrl4 = `http://api.openweathermap.org/geo/1.0/direct?q=${userInput}&limit=1&appid=5c31cfeca21bb4b2fcde410d7f059577`
    fetch(apiUrl4)
        .then(function (response) {
            return response.json()
        })
        .then(function (response) {
            let lat = response[0].lat
            let lon = response[0].lon
            console.log(lat, lon)
            apiUrl = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=5c31cfeca21bb4b2fcde410d7f059577&units=imperial`
            apiSearch()
            console.log(response)
        })


    console.log(apiUrl4)
}



// function fillWeatherData() {
//     for (var i = 0; i < 39; i + (8 - Math.floor(i / 8))) {
//         let tempNow = response.list[0].main.temp
//         $(`.tempNow${i}`).text(`Temp:` + ` ${tempNow}`)
//         let humidityNow = response.list[0].main.humidity
//         $(`.humidityNow${i}`).text(`Humidity:` + ` ${humidityNow}`)
//         let windSpeed = response.list[0].wind.speed
//         $(`.windSpeed${i}`).text(`Wind Speed:` + ` ${windSpeed} MPH`)
//     }
// }
// fillWeatherData()

//this is a submit possibly need to remove preventdefault later
$(`.btn`).on(`click`, function (event) {
    event.preventDefault()
    userInput = $(`.form-control`).val()
    setUrlApi()
    console.log(userInput)
    console.log(`imworking`)
})

function fillWeatherData() {
    for (var i = 0; i < 40; (i += 8 - Math.floor(i / 32))) {
        let tempNow = response.list[i].main.temp
        $(`.tempNow${i}`).text(`Temp:` + ` ${tempNow}`)
        let humidityNow = reponse.list[i].main.humidity
        $(`.humidityNow${i}`).text(`Humidity:` + ` ${humidityNow}`)
        let windSpeed = response.list[i].wind.speed
        $(`.windSpeed${i}`).text(`Wind Speed:` + ` ${windSpeed} MPH`)
        console.log(i)
    }
}
