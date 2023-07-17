let apiUrl = "http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=5c31cfeca21bb4b2fcde410d7f059577"

let apiUrl2 = "http://api.openweathermap.org/data/2.5/forecast?q=Minneapolis&appid=5c31cfeca21bb4b2fcde410d7f059577&units=imperial"

let apiUrl3 = "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=5c31cfeca21bb4b2fcde410d7f059577"


citySearch = $(`.me-2`).val()









// fetch(apiUrl2)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (response) {
//         console.log(response)


//                 let tempNow = response.list[0].main.temp
//                 $(`.tempNow`).text(`Temp:` + ` ${tempNow}`)
//                 let humidityNow = response.list[0].main.humidity
//                 $(`.humidityNow`).text(`Humidity:` + ` ${humidityNow}`)
//                 let windSpeed = response.list[0].wind.speed
//                 $(`.windSpeed`).text(`Wind Speed:` + ` ${windSpeed} MPH`)

//         console.log(tempNow)

//     });




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


function fillWeatherData() {
    let tempNow = testJson.list[0].main.temp
    $(`.tempNow`).text(`Temp:` + ` ${tempNow}`)
    let humidityNow = testJson.list[0].main.humidity
    $(`.humidityNow`).text(`Humidity:` + ` ${humidityNow}`)
    let windSpeed = testJson.list[0].wind.speed
    $(`.windSpeed`).text(`Wind Speed:` + ` ${windSpeed} MPH`)
}


let testJson = {
    "cod": "200",
    "message": 0,
    "cnt": 40,
    "list": [
        {
            "dt": 1689562800,
            "main": {
                "temp": 69.08,
                "feels_like": 67.89,
                "temp_min": 64.67,
                "temp_max": 69.08,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 982,
                "humidity": 47,
                "temp_kf": 2.45
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 9.24,
                "deg": 322,
                "gust": 21.27
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-07-17 03:00:00"
        },
        {
            "dt": 1689573600,
            "main": {
                "temp": 66,
                "feels_like": 64.74,
                "temp_min": 59.85,
                "temp_max": 66,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 983,
                "humidity": 52,
                "temp_kf": 3.42
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 6
            },
            "wind": {
                "speed": 7.7,
                "deg": 306,
                "gust": 21.5
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-07-17 06:00:00"
        },
        {
            "dt": 1689584400,
            "main": {
                "temp": 60.62,
                "feels_like": 59.43,
                "temp_min": 56.39,
                "temp_max": 60.62,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 983,
                "humidity": 65,
                "temp_kf": 2.35
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 7,
                "deg": 296,
                "gust": 21.05
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-07-17 09:00:00"
        },
        {
            "dt": 1689595200,
            "main": {
                "temp": 55.76,
                "feels_like": 54.66,
                "temp_min": 55.76,
                "temp_max": 55.76,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 985,
                "humidity": 77,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 8.81,
                "deg": 296,
                "gust": 21.83
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-07-17 12:00:00"
        },
        {
            "dt": 1689606000,
            "main": {
                "temp": 65.79,
                "feels_like": 64.51,
                "temp_min": 65.79,
                "temp_max": 65.79,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 985,
                "humidity": 52,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 10.42,
                "deg": 305,
                "gust": 16.82
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-07-17 15:00:00"
        },
        {
            "dt": 1689616800,
            "main": {
                "temp": 69.85,
                "feels_like": 68.47,
                "temp_min": 69.85,
                "temp_max": 69.85,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 985,
                "humidity": 41,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 28
            },
            "wind": {
                "speed": 10.29,
                "deg": 317,
                "gust": 17.43
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-07-17 18:00:00"
        },
        {
            "dt": 1689627600,
            "main": {
                "temp": 71.13,
                "feels_like": 69.82,
                "temp_min": 71.13,
                "temp_max": 71.13,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 985,
                "humidity": 40,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 7.11,
                "deg": 316,
                "gust": 12.24
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-07-17 21:00:00"
        },
        {
            "dt": 1689638400,
            "main": {
                "temp": 70.43,
                "feels_like": 69.19,
                "temp_min": 70.43,
                "temp_max": 70.43,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 985,
                "humidity": 43,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 98
            },
            "wind": {
                "speed": 7.54,
                "deg": 289,
                "gust": 11.68
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-07-18 00:00:00"
        },
        {
            "dt": 1689649200,
            "main": {
                "temp": 64.06,
                "feels_like": 62.71,
                "temp_min": 64.06,
                "temp_max": 64.06,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 984,
                "humidity": 54,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 26
            },
            "wind": {
                "speed": 4.32,
                "deg": 262,
                "gust": 6.82
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-07-18 03:00:00"
        },
        {
            "dt": 1689660000,
            "main": {
                "temp": 61.3,
                "feels_like": 60.01,
                "temp_min": 61.3,
                "temp_max": 61.3,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 985,
                "humidity": 61,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 48
            },
            "wind": {
                "speed": 4.29,
                "deg": 267,
                "gust": 11.86
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-07-18 06:00:00"
        },
        {
            "dt": 1689670800,
            "main": {
                "temp": 58.86,
                "feels_like": 57.63,
                "temp_min": 58.86,
                "temp_max": 58.86,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 985,
                "humidity": 68,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 87
            },
            "wind": {
                "speed": 3.69,
                "deg": 293,
                "gust": 6.49
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-07-18 09:00:00"
        },
        {
            "dt": 1689681600,
            "main": {
                "temp": 60.22,
                "feels_like": 59.05,
                "temp_min": 60.22,
                "temp_max": 60.22,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 985,
                "humidity": 66,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 68
            },
            "wind": {
                "speed": 1.54,
                "deg": 196,
                "gust": 2.08
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-07-18 12:00:00"
        },
        {
            "dt": 1689692400,
            "main": {
                "temp": 71.51,
                "feels_like": 70.48,
                "temp_min": 71.51,
                "temp_max": 71.51,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 986,
                "humidity": 45,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 66
            },
            "wind": {
                "speed": 4.63,
                "deg": 205,
                "gust": 6.42
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-07-18 15:00:00"
        },
        {
            "dt": 1689703200,
            "main": {
                "temp": 79.41,
                "feels_like": 79.41,
                "temp_min": 79.41,
                "temp_max": 79.41,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 985,
                "humidity": 35,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 38
            },
            "wind": {
                "speed": 5.32,
                "deg": 213,
                "gust": 5.93
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-07-18 18:00:00"
        },
        {
            "dt": 1689714000,
            "main": {
                "temp": 83.48,
                "feels_like": 81.5,
                "temp_min": 83.48,
                "temp_max": 83.48,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 984,
                "humidity": 29,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 8
            },
            "wind": {
                "speed": 5.08,
                "deg": 219,
                "gust": 6.31
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-07-18 21:00:00"
        },
        {
            "dt": 1689724800,
            "main": {
                "temp": 79.56,
                "feels_like": 79.56,
                "temp_min": 79.56,
                "temp_max": 79.56,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 983,
                "humidity": 38,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 40
            },
            "wind": {
                "speed": 5.68,
                "deg": 157,
                "gust": 7
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-07-19 00:00:00"
        },
        {
            "dt": 1689735600,
            "main": {
                "temp": 73.13,
                "feels_like": 72.54,
                "temp_min": 73.13,
                "temp_max": 73.13,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 983,
                "humidity": 51,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 6.22,
                "deg": 158,
                "gust": 17.63
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-07-19 03:00:00"
        },
        {
            "dt": 1689746400,
            "main": {
                "temp": 70.61,
                "feels_like": 69.91,
                "temp_min": 70.61,
                "temp_max": 70.61,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 984,
                "humidity": 54,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 98
            },
            "wind": {
                "speed": 3.36,
                "deg": 152,
                "gust": 9.48
            },
            "visibility": 10000,
            "pop": 0.04,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-07-19 06:00:00"
        },
        {
            "dt": 1689757200,
            "main": {
                "temp": 66.88,
                "feels_like": 66.76,
                "temp_min": 66.88,
                "temp_max": 66.88,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 984,
                "humidity": 74,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 2.04,
                "deg": 322,
                "gust": 2.55
            },
            "visibility": 10000,
            "pop": 0.64,
            "rain": {
                "3h": 0.35
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-07-19 09:00:00"
        },
        {
            "dt": 1689768000,
            "main": {
                "temp": 66.67,
                "feels_like": 66.09,
                "temp_min": 66.67,
                "temp_max": 66.67,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 983,
                "humidity": 65,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 5.1,
                "deg": 156,
                "gust": 12.59
            },
            "visibility": 10000,
            "pop": 0.44,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-07-19 12:00:00"
        },
        {
            "dt": 1689778800,
            "main": {
                "temp": 76.91,
                "feels_like": 76.75,
                "temp_min": 76.91,
                "temp_max": 76.91,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 983,
                "humidity": 52,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 34
            },
            "wind": {
                "speed": 7.56,
                "deg": 209,
                "gust": 13.2
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-07-19 15:00:00"
        },
        {
            "dt": 1689789600,
            "main": {
                "temp": 85.68,
                "feels_like": 86.14,
                "temp_min": 85.68,
                "temp_max": 85.68,
                "pressure": 1010,
                "sea_level": 1010,
                "grnd_level": 981,
                "humidity": 45,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "clouds": {
                "all": 17
            },
            "wind": {
                "speed": 10.42,
                "deg": 241,
                "gust": 15.61
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-07-19 18:00:00"
        },
        {
            "dt": 1689800400,
            "main": {
                "temp": 90.84,
                "feels_like": 88.68,
                "temp_min": 90.84,
                "temp_max": 90.84,
                "pressure": 1007,
                "sea_level": 1007,
                "grnd_level": 979,
                "humidity": 29,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 6
            },
            "wind": {
                "speed": 17.31,
                "deg": 261,
                "gust": 24.7
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-07-19 21:00:00"
        },
        {
            "dt": 1689811200,
            "main": {
                "temp": 83.39,
                "feels_like": 82.29,
                "temp_min": 83.39,
                "temp_max": 83.39,
                "pressure": 1009,
                "sea_level": 1009,
                "grnd_level": 980,
                "humidity": 37,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 3
            },
            "wind": {
                "speed": 13.58,
                "deg": 295,
                "gust": 22.97
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-07-20 00:00:00"
        },
        {
            "dt": 1689822000,
            "main": {
                "temp": 74.39,
                "feels_like": 73.98,
                "temp_min": 74.39,
                "temp_max": 74.39,
                "pressure": 1010,
                "sea_level": 1010,
                "grnd_level": 981,
                "humidity": 52,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 1
            },
            "wind": {
                "speed": 10.54,
                "deg": 299,
                "gust": 24.96
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-07-20 03:00:00"
        },
        {
            "dt": 1689832800,
            "main": {
                "temp": 67.73,
                "feels_like": 67.44,
                "temp_min": 67.73,
                "temp_max": 67.73,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 981,
                "humidity": 69,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 3
            },
            "wind": {
                "speed": 9.24,
                "deg": 278,
                "gust": 20.02
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-07-20 06:00:00"
        },
        {
            "dt": 1689843600,
            "main": {
                "temp": 64.26,
                "feels_like": 64.04,
                "temp_min": 64.26,
                "temp_max": 64.26,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 981,
                "humidity": 78,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 8
            },
            "wind": {
                "speed": 8.97,
                "deg": 291,
                "gust": 21.68
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-07-20 09:00:00"
        },
        {
            "dt": 1689854400,
            "main": {
                "temp": 65.53,
                "feels_like": 65.41,
                "temp_min": 65.53,
                "temp_max": 65.53,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 982,
                "humidity": 77,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "clouds": {
                "all": 24
            },
            "wind": {
                "speed": 9.46,
                "deg": 293,
                "gust": 21.45
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-07-20 12:00:00"
        },
        {
            "dt": 1689865200,
            "main": {
                "temp": 65.61,
                "feels_like": 65.59,
                "temp_min": 65.61,
                "temp_max": 65.61,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 983,
                "humidity": 79,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 9.82,
                "deg": 321,
                "gust": 20.62
            },
            "visibility": 10000,
            "pop": 0.2,
            "rain": {
                "3h": 0.19
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-07-20 15:00:00"
        },
        {
            "dt": 1689876000,
            "main": {
                "temp": 73.26,
                "feels_like": 72.73,
                "temp_min": 73.26,
                "temp_max": 73.26,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 984,
                "humidity": 52,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 99
            },
            "wind": {
                "speed": 13.56,
                "deg": 345,
                "gust": 20.76
            },
            "visibility": 10000,
            "pop": 0.32,
            "rain": {
                "3h": 0.27
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-07-20 18:00:00"
        },
        {
            "dt": 1689886800,
            "main": {
                "temp": 79.34,
                "feels_like": 79.34,
                "temp_min": 79.34,
                "temp_max": 79.34,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 984,
                "humidity": 35,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 71
            },
            "wind": {
                "speed": 14.07,
                "deg": 19,
                "gust": 23.55
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-07-20 21:00:00"
        },
        {
            "dt": 1689897600,
            "main": {
                "temp": 76.69,
                "feels_like": 75.9,
                "temp_min": 76.69,
                "temp_max": 76.69,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 985,
                "humidity": 39,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 65
            },
            "wind": {
                "speed": 8.86,
                "deg": 3,
                "gust": 16.78
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-07-21 00:00:00"
        },
        {
            "dt": 1689908400,
            "main": {
                "temp": 69.75,
                "feels_like": 68.72,
                "temp_min": 69.75,
                "temp_max": 69.75,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 986,
                "humidity": 49,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 55
            },
            "wind": {
                "speed": 4.76,
                "deg": 299,
                "gust": 12.41
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-07-21 03:00:00"
        },
        {
            "dt": 1689919200,
            "main": {
                "temp": 66.61,
                "feels_like": 65.66,
                "temp_min": 66.61,
                "temp_max": 66.61,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 986,
                "humidity": 57,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 39
            },
            "wind": {
                "speed": 4.76,
                "deg": 316,
                "gust": 13.53
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-07-21 06:00:00"
        },
        {
            "dt": 1689930000,
            "main": {
                "temp": 63.52,
                "feels_like": 62.76,
                "temp_min": 63.52,
                "temp_max": 63.52,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 986,
                "humidity": 68,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 4
            },
            "wind": {
                "speed": 6.13,
                "deg": 315,
                "gust": 18.48
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-07-21 09:00:00"
        },
        {
            "dt": 1689940800,
            "main": {
                "temp": 62.53,
                "feels_like": 61.92,
                "temp_min": 62.53,
                "temp_max": 62.53,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 987,
                "humidity": 73,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 4
            },
            "wind": {
                "speed": 5.84,
                "deg": 339,
                "gust": 14.27
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-07-21 12:00:00"
        },
        {
            "dt": 1689951600,
            "main": {
                "temp": 74.93,
                "feels_like": 74.34,
                "temp_min": 74.93,
                "temp_max": 74.93,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 988,
                "humidity": 47,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 6.89,
                "deg": 343,
                "gust": 11.92
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-07-21 15:00:00"
        },
        {
            "dt": 1689962400,
            "main": {
                "temp": 83.48,
                "feels_like": 81.59,
                "temp_min": 83.48,
                "temp_max": 83.48,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 987,
                "humidity": 30,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 8
            },
            "wind": {
                "speed": 7.49,
                "deg": 331,
                "gust": 13.04
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-07-21 18:00:00"
        },
        {
            "dt": 1689973200,
            "main": {
                "temp": 84.13,
                "feels_like": 82,
                "temp_min": 84.13,
                "temp_max": 84.13,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 986,
                "humidity": 29,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 88
            },
            "wind": {
                "speed": 10.98,
                "deg": 340,
                "gust": 12.95
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-07-21 21:00:00"
        },
        {
            "dt": 1689984000,
            "main": {
                "temp": 80.94,
                "feels_like": 79.77,
                "temp_min": 80.94,
                "temp_max": 80.94,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 986,
                "humidity": 30,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 72
            },
            "wind": {
                "speed": 6.35,
                "deg": 327,
                "gust": 12.82
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-07-22 00:00:00"
        }
    ],
    "city": {
        "id": 5037649,
        "name": "Minneapolis",
        "coord": {
            "lat": 44.98,
            "lon": -93.2638
        },
        "country": "US",
        "population": 382578,
        "timezone": -18000,
        "sunrise": 1689504078,
        "sunset": 1689558989
    }
}
fillWeatherData()
console.log(testJson)