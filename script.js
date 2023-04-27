let intentos = 6;
let palabra = 'APPLE';
const API ='https://random-word-api.herokuapp.com/word?number=2&length=5&lang=es'

fetch(API),then(response => response.json())
.then(response => {
    palabra = response[0].toUpperCase()
    console.log(palabra)
    })
.catch(err =>  console.log('err') )

const BOTON = document.getElementById("guess-button");
BOTON.addEventListener('click', intentar);


function leerIntento() {
    let intento = document.getElementById("guess-input")
    return intento.value.toUpperCase();
}

function terminar(mensaje) {
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    BOTON.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}

function intentar() {
    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = 'row';

    const INTENTO = leerIntento();

    if (INTENTO === palabra) {
        terminar("<h1>GANASTE!😀</h1>");
        return;
    }

    for (let i in INTENTO) {
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        if (INTENTO[i] === palabra[i]) { //VERDE
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'green'; // Se debe crear la clase green
        } else if (palabra.includes(INTENTO[i])) { //AMARILLO
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'yellow'; // Se debe crear la clase yellow
        } else {      //GRIS
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'grey'; // Se debe crear la clase grey
        }
        ROW.appendChild(SPAN);
    }

    GRID.appendChild(ROW)

    intentos--
    if (intentos == 0) {
        terminar("<h1>PERDISTE!😖</h1>")
    }

    
    
}
