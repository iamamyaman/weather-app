const apiKey = "deb971376bba8a583e240429038a3e73";
const btn = document.querySelector(".search")
const city = document.querySelector(".query")

const getData =()=>fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
.then(res=>res.json())
.then(data=>{
    console.log(city.value)
})
    
//     const temp = document.querySelector(".temp")
//     temp.innerText = `${data.temp}`

//     city.innerText = `${data.main.name}`
// })

btn.addEventListener("click",getData)