
"https://www.translated.net/hts/?f=quote&s=en-GB&t=pt-BR&w=100&cid=htsdemo&p=htsdemo5&of=json"




var ProcurarValue = document.querySelector("#pesquisaDaCidade");
ProcurarValue.addEventListener("keypress", setFunc);


function setFunc(e){
    if(e.keyCode==13){
    getData(ProcurarValue.value);
    }
}
function getData(value){
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+value+"&appid=503a3b997475f8fbe0505baf55d7600a")
    .then(function(response){
        return response.json();
    })
    .then(function(weather){
        document.querySelector("#cidade").innerHTML=weather.name;
        document.querySelector("#temp").innerHTML=(parseFloat(weather.main.temp-273.15)).toFixed(2) +" °C ";
        document.querySelector("#minMaxTemp").innerHTML=  "Min.: "+ (parseFloat(weather.main.temp_min-273.15)).toFixed(2)+ " °C  / Max.: "+ (parseFloat(weather.main.temp_max-273.15)).toFixed(2)+" °C";
        document.querySelector("#clima").innerHTML=weather.weather[0].main;
        document.querySelector("#DescricaoClima").innerHTML=weather.weather[0].description;
        document.querySelector("#DirecaoVento").innerHTML=" Wind Speed: "+ weather.wind.speed + " km/h ";
    })
    .catch(function(err){
        console.log(err);
    });
}
