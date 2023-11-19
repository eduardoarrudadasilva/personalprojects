const pomodoroMinutos = 0
const pomodoroSegundos = 5

let minutos = pomodoroMinutos
let segundos = pomodoroSegundos
let ligado = false
let interval
let segtotal
let deg
const circularProgress = document.getElementById("timer")
const minutosEl= document.getElementById("minutos")
const segundosEl = document.getElementById("segundos")
const pomodoroMax = 1500
const pauseMax = 125

function progressBar(){
    segtotal = (minutos*60) + segundos
    deg = (segtotal/pomodoroMax)* 360
    console.log(deg)
    circularProgress.style.background = `conic-gradient(cadetblue ${deg}deg, rgb(226, 226, 226) 0deg)`
}

function temporizador(){
    interval = setInterval(()=>{
        segundos -= 1
        if(segundos <= 0){                    
            minutos -= 1
            segundos = 59
        }
        if(segundos <= 0 && minutos<= 0){
            resetar()
        }
        progressBar()
        minutosEl.innerHTML = minutos
        segundosEl.innerHTML = segundos
    },1000)
}

function controlador(){
    const botao = document.querySelector('button#iniciar')
    if (!ligado){
        ligado = true
        temporizador()
        botao.innerHTML = "Pausar"
    } else{
        clearInterval(interval)
        ligado = false
        botao.innerHTML = "Continuar"
    }
}

function resetar(){
    clearInterval(interval)
    ligado = false
    minutos = pomodoroMinutos
    segundos = pomodoroSegundos
    minutosEl.innerHTML = minutos
    segundosEl.innerHTML = '00'
    botao.innerHTML = "Iniciar"
}