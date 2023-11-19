const pomodoroMinutos = 0
const pomodoroSegundos = 2

let minutos = pomodoroMinutos
let segundos = pomodoroSegundos
let ligado = false
let interval
const minutosEl= document.getElementById("minutos")
const segundosEl = document.getElementById("segundos")


function temporizador(){
    interval = setInterval(()=>{
        segundos -= 1
        if(segundos <= 0){                    
            minutos -= 1
            segundos = 59
        }
        minutosEl.innerHTML = minutos
        segundosEl.innerHTML = segundos
    },1000)
}

function controlador(){
    const botao = document.querySelector('button#botao')
    if (!ligado){
        ligado = true
        temporizador()
        botao.innerHTML = "Pausar"
    } else{
        clearInterval(interval)
        ligado = false
        botao.innerHTML = "Iniciar"
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