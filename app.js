// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

module.exports = {sum}

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
module.exports = { sum, fromEuroToDollar }

const fromEuroToYen = function(valueInEuro) {
    
    let valueInYen = valueInEuro * 156.5; 

    return valueInYen;
}

module.exports = { sum, fromEuroToDollar, fromEuroToYen}

const fromEuroToPound = function(valueInEuro) {
    
    let valueInPound = valueInEuro * 1

    return valueInPound
}

module.exports = { sum, fromEuroToDollar, fromEuroToYen, fromEuroToPound}