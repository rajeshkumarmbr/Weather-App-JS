const apiKey ="b9ca44befd2999fcfc8147f4d36a2b4a";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".city-search input");
const searchBtn1 = document.querySelector(".city-search button");

async function cheackWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    // console.log(data);

    document.querySelector(".city-name").innerText=data.name;
    document.querySelector(".city-temp").innerHTML=Math.round(data.main.temp)  +" °C" ;
    document.querySelector(".humi").innerHTML=data.main.humidity+" %";
    document.querySelector(".wind").innerHTML=Math.round(data.wind.speed)+" Km/h";

}
let h= document.getElementById("city-hours");
let m= document.getElementById("city-min");
let s = document.getElementById("city-sec");

let dy = document.getElementById("city-days");
let mh = document.getElementById("city-month");
let yr = document.getElementById("city-years");

var monthShortNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

setInterval(()=>{
    h.innerHTML=(new Date().getHours()) +" :"
},1000);
setInterval(()=>{
    m.innerHTML=(new Date().getMinutes())+" :"
},1000);
setInterval(()=>{
    s.innerHTML=(new Date().getSeconds())
},1000);

setInterval(()=>{
    dy.innerHTML=(new Date().getDate())+ " - "
},1000);
setInterval(()=>{
    mh.innerHTML=monthShortNames[(new Date().getMonth())] +" - "
},1000);
setInterval(()=>{
    yr.innerHTML = (new Date().getFullYear())
},1000);


searchBtn1.addEventListener("click",()=>{
    cheackWeather(searchBox.value);

});


