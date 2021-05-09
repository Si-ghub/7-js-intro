/*
KINTAMŲJŲ PALYKINIMAS

OPERATORIAI:
>, <, 
>=, <=, 

=== (ar lugu?), !===(nelygu)


== (nenaudojam), != (nenaudojam)   // NENAUDOJAM!

ŠABLONAI:
if () {}
if () {} else {}
if () {} else if () {}
if () {} else if () {}...else if () {}
if () {} else if () {}...else if () {} else {}

Jei nesutampa tipai, nera logikos, pirmiausiai turi sutapti tipai. 
*/

const a = 'labas';
const b = 'Labas'; 

if (a == b) {
    console.log('taip');     // jei netenkina pirmos salygos automatiskai eina i antra
} else { 
    console.log('ne');      // jei didzioji raide, reiskia nesutampa
}

const akys = 'hhh';        // jei netenkina nei vieno is if, bus else

if (akys === 'melynos') {
    console.log('Melynakis');
} else if (akys === 'zalios') {
    console.log('Zaliaakis');
} else if (akys === 'rudos') {
    console.log('Rudaakis');
} else {
    console.log('Neatpazinta akiu spalva... 🤔');
}


const plaukai = 'melyni';

if (plaukai === 'melyni') {
    console.log('Melynaplaukis');
}

if (plaukai === 'zali') {
    console.log('Zaliaplaukis');
}

if (plaukai === 'rudi') {
    console.log('Rudaplaukis');
} else {
    console.log('Plauku spalva nera ruda... 🤔');
}

console.log('--------------------');

const parosMetas = 'rytas';
const arLyja = false;

if (parosMetas === 'rytas') {
    if (arLyja) {
        console.log('Labas rytas, nepamirsk skecio!');
    } else {
        console.log('Labas rytas!');
    }
} else {
    if (parosMetas === 'diena') {
        if (arLyja) {
            console.log('Labas diena, nepamirsk skecio!');
        } else {
            console.log('Labas diena!');
        }
    } else {
        if (parosMetas === 'vakaras') {
            if (arLyja) {
                console.log('Labas vakaras, nepamirsk skecio!');
            } else {
                console.log('Labas vakaras!');
            }
        } else {
            console.log('Neatpazintas paros metas');
        }
    }
}

console.log ('-----------------------');

const rajonas = 'fabijoniskes'
const arVilnius = false;

if (rajonas === 'naujamiestis') {
    if (arVilnius) {
        console.log('Vaziuoti su dviraciu');
    } else {
        console.log('Vaziuoti automobiliu');
    }
}else {
    if (rajonas === 'senamiestis') {
        if (arVilnius) {
            console.log('Eiti pesciomis');
        } else {
            console.log('Vaziuoti automobiliu');
        } 
    } else {
        if (rajonas === 'fabijoniskes') {
            if (arVilnius) {
            console.log('Vykti automobiliu');
        } else {
            console.log('ne vykti dabar');
        }
        } else {
            console.log('Nezinomas rajonas');
        }
    }
}