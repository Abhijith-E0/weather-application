const apiKey ="80f98ac2aabec2570b450931627a48b6";


async function getWeather(){


    const city =
    document.getElementById("cityInput").value;


    if(city === ""){
        alert("Enter city name");
        return;
    }



    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;



    try{


        const response = await fetch(url);

        const data = await response.json();

        console.log(data);


        if(!response.ok){

            alert(data.message);

            return;

        }
        if(data.cod === "404"){

            alert("City not found");
            return;

        }



        document.getElementById("city")
        .innerHTML =
        data.name;



        document.getElementById("temperature")
        .innerHTML =
        `${Math.round(data.main.temp)} °C`;



        document.getElementById("condition")
        .innerHTML =
        data.weather[0].description;



        document.getElementById("humidity")
        .innerHTML =
        `${data.main.humidity}%`;



        document.getElementById("wind")
        .innerHTML =
        `${data.wind.speed} km/h`;



        document.getElementById("icon")
        .src =
        `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;



    }


    catch(error){

        console.log(error);

        alert("Something went wrong");

    }



}