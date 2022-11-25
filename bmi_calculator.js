function bmiCalculator (weight_kg , height_meters) {

    let meters_squared = height_meters * height_meters;
    let bmi = weight_kg / meters_squared;
    
    if (bmi < 18.5) {
        console.log ("Your BMI is " + bmi + " and is classified as underweight." );
    } else if ((bmi >= 18.5) && (bmi <= 24.9)) {
        console.log ("Your BMI is " + bmi + " and is classified as normal.");
    } else if ((bmi >= 25) && (bmi <= 29.9)) {
        console.log ("Your BMI is " + bmi + " and is classified as overweight.");
    } else if ((bmi >= 30) && (bmi <= 34.9)) {
        console.log ("Your BMI is " + bmi + " and is classified as obese.");
    } else {
        console.log ("Your BMI is " + bmi + " and is classified as extremely obese." );
    }
}

bmiCalculator (44 , 1.50)