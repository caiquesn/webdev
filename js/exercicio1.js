
//if(nota >= 90 && nota <= 100) {
    //console.log('A')
//} else if(nota >= 80 && nota <=89) {
    //console.log('B')
//} else if(nota >= 70 && nota <=79) {
    //console.log('C')
//} else if(nota >= 60 && nota <=69) {
    //console.log('D')
//} else if(nota >= 0 && nota < 60) {
    //console.log('E')
//} else {
    //console.log('Nota Inválida')
//}

function getNotas (nota) {
    if(nota >= 90 && nota <= 100) {
        console.log('A')
    } else if(nota >= 80 && nota <=89) {
        console.log('B')
    } else if(nota >= 70 && nota <=79) {
        console.log('C')
    } else if(nota >= 60 && nota <=69) {
        console.log('D')
    } else if(nota >= 0 && nota < 60) {
        console.log('E')
    } else {
        console.log('Nota Inválida')
    }

    return nota
}

console.log(getNotas(90))