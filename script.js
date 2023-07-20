    let inputBox = document.querySelector("#input-box")
    let btn=document.querySelector("#btn")
    let wBox=document.querySelector(".weather-box")


    let enterCity=document.querySelector("#city")
    let date=document.querySelector("#date")
    let temp=document.querySelector("#temp")
    let min_max =document.querySelector("#min-max")
    let weather =document.querySelector("#weather")



    btn.addEventListener("click",function(){
        let city = inputBox.value

        
    

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cd08ce6c4ae460765c36a7f7dff13443` )
        .then(function(response){
            return response.json()
        }).then(function(response){
            let allData=response
            // console.log(allData)
            // console.log(allData.dt)
            // console.log(allData.main.temp)
            // console.log(allData.main.temp_min)
            // console.log(allData.main.temp_max)
            // console.log(allData.weather[0].main)
            // console.log(allData.weather[0].icon)
        

            enterCity.innerHTML=allData.name

            temp.innerHTML=`${parseInt((allData.main.temp)-273.5)} &deg;C`

            min_max.innerHTML=`${parseInt((allData.main.temp_min)-273.5)}&deg; C(min) / ${parseInt((allData.main.temp_max)-273.5)}&deg; C(max)`

            weather.innerHTML=allData.weather[0].main

            let cityDate=new Date((allData.dt)*1000).toLocaleString("en-US", {day: "numeric"})
            let cityMonth=new Date((allData.dt)*1000).toLocaleString("en-US", {month: "long"})
            let cityDay=new Date((allData.dt)*1000).toLocaleString("en-US", {weekday: "long"})
            let cityYear=new Date((allData.dt)*1000).toLocaleString("en-US", {year: "numeric"})

            date.innerHTML=`${cityDate} ${cityMonth} (${cityDay}), ${cityYear}`

    
            wBox.classList.add("block")
        })




    })    

