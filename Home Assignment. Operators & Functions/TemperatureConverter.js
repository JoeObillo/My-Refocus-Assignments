function CelsiusconvertToKelvin (tempCelsius){
    let tempKelvin = tempCelsius + 273.15;
    return tempKelvin;
}

function FahrenheitconvertToKelvin (tempFahrenheit){
    let tempKelvin = (tempFahrenheit - 32) / 1.8 + 273.15;
    return tempKelvin;
}

console.log (CelsiusconvertToKelvin(30));
console.log (FahrenheitconvertToKelvin(55));