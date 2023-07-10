let momento = '';
let num = 0;
let op = 0;
let res = true

function num0(){
    if (momento == 0 || res == true){
        momento = '0'
        res = false
    } else{
        momento += '0'
    }
    document.getElementById('screen').innerHTML = `${momento}`
}
function num1(){
    if (momento == 0 || res == true){
        momento = '1'
        res = false
    } else{
        momento += '1'
    }
    document.getElementById('screen').innerHTML = `${momento}`
}
function num2(){
    if (momento == 0 || res == true){
        momento = '2'
        res = false
    } else{
        momento += '2'
    }
    document.getElementById('screen').innerHTML = `${momento}`
}
function num3(){
    if (momento == 0 || res == true){
        momento = '3'
        res = false
    } else{
        momento += '3'
    }
    document.getElementById('screen').innerHTML = `${momento}`
}
function num4(){
    if (momento == 0 || res == true){
        momento = '4'
        res = false
    } else{
        momento += '4'
    }
    document.getElementById('screen').innerHTML = `${momento}`
}
function num5(){
    if (momento == 0 || res == true){
        momento = '5'
        res = false
    } else{
        momento += '5'
    }
    document.getElementById('screen').innerHTML = `${momento}`
}
function num6(){
    if (momento == 0 || res == true){
        momento = '6'
        res = false
    } else{
        momento += '6'
    }
    document.getElementById('screen').innerHTML = `${momento}`
}
function num7(){
    if (momento == 0 || res == true){
        momento = '7'
        res = false
    } else{
        momento += '7'
    }
    document.getElementById('screen').innerHTML = `${momento}`
}
function num8(){
    if (momento == 0 || res == true){
        momento = '8'
        res = false
    } else{
        momento += '8'
    }
    document.getElementById('screen').innerHTML = `${momento}`
}
function num9(){
    if (momento == 0 || res == true){
        momento = '9'
        res = false
    } else{
        momento += '9'
    }
    document.getElementById('screen').innerHTML = `${momento}`
}

function adi(){
    num += Number(momento)
    momento = 0
    document.getElementById('screen').innerHTML = ``
    op ='adi'
}

function submit(){
    if (op == 'adi'){
        num += Number(momento)
    }
    momento = 0
    document.getElementById('screen').innerHTML = `${num}`
    res = true
}
function apagar(){
    document.getElementById('screen').innerHTML = ``
    num = 0
    momento = 0
}