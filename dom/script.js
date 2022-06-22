// MANIPULANDO ELEMENTOS
// texContent ou innerText / innerHTML

// busca o seletor h1
const element = document.querySelector('h1')

// = substitui / += add frase
//element.textContent += 'Olá'

//element.innerText = 'Olá'

element.innerHTML = '<em> Olá </em>' 
/*------------------------------------*/

// value
const elemento = document.querySelector('input')

//console.log(elemento.value)

elemento.value = 'oi'

/*------------------------------------*/

// atributos
//add, pegar e remover
const header = document.querySelector('header')
header.setAttribute('id', 'header')

const headerID = document.querySelector('#header')
console.log(headerID.getAttribute('id'))

//header.removeAttribute('id')

/*------------------------------------*/

// alterando estilo inline

//seleciona o elemento que vai mudar o style
const color = document.querySelector('body')
color.style.backgroundColor = 'lightblue'
console.log(color.style.backgroundColor)

/*------------------------------------*/

// criar e adicionar elementos

//createElement - cria o elemento
const div = document.createElement('div')
// coloca informação nele
div.innerText = 'Hello World'

// append / prepend / insertBefore
const body = document.querySelector('body')
//adicionou uma div no final do body
// prepend add no inicio
// insertBefore escolhe o lugar( , )
body.append(div)