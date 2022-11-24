var oxygensaturation = 95
var pulserate = 161

function OxygenLevelReading (oxygensaturation) {
    if (oxygensaturation >= 96){
    console.log(`Normal reading.`);
    } else if ( (oxygensaturation == 95 )) {
        console.log(`Acceptable to continue home monitoring.`);
    } else if ( (oxygensaturation >= 93) && (oxygensaturation <= 94) ) {
        console.log (`Seek advice from health professionals.`);
    } else if ( oxygensaturation <= 92 ) {
        console.log (`Seek urgent medical advice.`);
    } else {
        console.log (`The oxygen saturation is not numerical.`)
    }
}

function PulseRateReading (pulserate) {
    if ( (pulserate >= 40) && (pulserate <= 100)) {
        console.log (`Normal reading.`);
    } else if ((pulserate >= 101) && (pulserate <= 109)) {
        console.log (`Acceptable to continue home monitoring.`);
    } else if ((pulserate >= 110) && (pulserate <= 130)) {
        console.log (`Seek advice from health professionals.`);
    } else if (pulserate >= 131) {
        console.log (`Seek urgent medical advice.`);
    } else {
        console.log (`The pulse rate is not numerical.`);
    }
}

OxygenLevelReading(oxygensaturation);
PulseRateReading(pulserate);