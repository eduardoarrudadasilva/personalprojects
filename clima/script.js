const apiKey = '50371b3f770cc2ce1a2a5392e963d422'

const cidadeInput = document.querySelector('#cidade')
const buscarBtn = document.querySelector('#search')

const cidadeElemento = document.querySelector('#city')
const temperatura = document.querySelector('#temperatura')
const descricao = document.querySelector('#descricao')
const umidade = document.querySelector('#umidade')
const vento = document.querySelector('#vento')

const weatherData = document.querySelector('#weather-data')

async function getWeatherData(cidade){
    const apiWheaterURL = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${apiKey}&lang=pt_br`

    const res = await fetch(apiWheaterURL)
    const data = await res.json()
    console.log(data)
    return data
}

async function climaData(cidade){
    const data = await getWeatherData(cidade)
    cidadeElemento.innerHTML = ` ${data.name}`
    temperatura.innerHTML = `${parseInt(data.main.temp)}&deg;C`
    descricao.innerHTML = data.weather[0].description
    umidade.innerHTML = `${data.main.humidity}%`
    vento.innerHTML = `${data.wind.speed}Km/h`

    weatherData.style.display = 'flex'
}


buscarBtn.addEventListener("click", (e) =>{
    e.preventDefault()
    const cidade = cidadeInput.value
    climaData(cidade)
});

cidadeInput.addEventListener("keyup", (e) => {
    if(e.code === "Enter"){
        const cidade = e.target.value
        climaData(cidade)
    }
})