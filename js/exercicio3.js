/* Crie uma função que receba uma string em celsius ou fahrenheit e faça a trasnformação de uma unidade para a outra

C = (F-32) * 5/9
F = C * 9/5 + 32
*/

// transformDegree('50F')
function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    // fluxo de erro
    if(!celsiusExists && !fahrenheitExists) {
        throw new Error('Grau não identificado')
    }

    //fluxo ideal, F -> C
    let updateDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let deggreSign = 'C'

    //fluxo alternativo, C -> F
    if(celsiusExists) {
        updateDegree = Number(degree.toUpperCase().replace("C", "")); 
        formula = (celsius) => celsius * 9/5 +32
        deggreSign = 'F'
    }

    return formula(updateDegree) + deggreSign
}

try {
    console.log(transformDegree('50F'))
    console.log(transformDegree('10C'))
    //transformDegree('50Z')
} catch (error) {
    console.log(error.message)
}