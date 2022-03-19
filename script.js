const apiKey = "deb971376bba8a583e240429038a3e73";
const btn = document.querySelector(".search")
const query = document.querySelector(".query")
const url  = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${query.value}&appid=${apiKey}`

    

btn.addEventListener("click",(city)=>
fetch(url(city))
.then(res=>res.json())
.then(data=>{
    console.log(data)
    const cityName = document.querySelector(".city")
    cityName.textContent= data.name

    const temp = document.querySelector(".temp")
    temp.textContent = Math.floor(data.main.temp-273)

    const icon = document.querySelector(".illustration")
    icon.innerHTML = `<img src = "http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`
    

})
.catch(err=>alert("Type the correct city name"))

)