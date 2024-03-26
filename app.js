let numeroSecreto = 0;
let intentos = 0; 
let numeroMaximo= 10;
let listaNumerosSorteados=[]; 

function asignarTextoElemento (elemento,texto) {
    let elementoHTML = document.querySelector(elemento); 
    elementoHTML.innerHTML = texto; 
}

function verificarIntento() {
    let numeroDeUsuario = parseInt (document.getElementById('valorUsuario').value);
    console.log(intentos);

    if(numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos===1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        //El usuario no acerto.
        if (numeroDeUsuario>numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento ('p', 'El número es mayor');
        } 
        intentos++; 
        limpiarCaja();

    } 
    return;
}

function limpiarCaja () {
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value =''
    
}

function generarNumeroSecreto() {

    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
   
    console.log (numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length==numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {

    //Si el número esta en la lista 
    if (listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();         
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento ('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto=generarNumeroSecreto();
    intentos=1;

}

function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja ();
    //Mensaje inicio (numeros)
    //Generar nuevo numero aleatorio
    //Iniciar numero intentos
    condicionesIniciales();
    //Deshabilitar de nuevo el boton de nuevo juego
    document.querySelector ('#reiniciar').setAttribute('disable', 'true');
}

condicionesIniciales();