var count = 0;
var disp = document.getElementById("display");
var input = document.getElementById("input");

function contador(){
    count++;
    disp.innerHTML = count;
}
    
function convert(){
    var input = document.getElementById("input")
    var resultado = input.value.toUpperCase();
   
    input.value = ""
    document.getElementById("resultado").innerText = "Em Maiúsculo: " + resultado;
}

function soma(){
    var v1 = document.getElementById("v1")
    var v2 = document.getElementById("v2")
    var resultado = parseInt(v1.value) + parseInt(v2.value)
    
    document.getElementById("resultado").innerText = "A soma de " + v1.value+ " + " + v2.value + " é igual a: " + resultado;
    v1.value = ""
    v2.value = ""
}