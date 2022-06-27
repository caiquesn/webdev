//Eventos
// 'on...' no html
function print() {
    console.log('print')
}

function ok() {
    console.log('ok')
}

/*------------------------------------------------*/

// Eventos de teclado onkey...
const input = document.querySelector('input')

// 'onkey...' no js
input.onkeydown = function() {
    console.log('rode')
}

/*------------------------------------------------*/

// Eventos via js
const h1 = document.querySelector('h2')

// escolher o evento e a função que ele vai chamar
// consigo add varias funções
h1.addEventListener('click', imprimir)

function imprimir() {
    console.log('imprimir')
}
