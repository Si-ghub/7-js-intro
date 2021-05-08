/*
KINTAMŲJŲ PALYKINIMAS

OPERATORIAI:
>, <, 
>=, <=, 

=== (ar lugu?), !===(nelygu)


== (nenaudojam), != (nenaudojam)

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
    console.log('taip');
} else { 
    console.log('ne');
}

const akys = 'melynos';

if (akys === 'melynos') {
    console.log('Melynakis');
} else if (akys === 'zalios') {
    console.log('Zaliaakis');
} else if (akys === 'rudos') {
    console.log('Rudaakis');
} else {
    console.log('Neatpazinta akiu spalva... 🤔');
}


const plaukai = 'rudos';

if (plaukai === 'melynos') {
    console.log('Melynaplaukis');
}

if (plaukai === 'zalios') {
    console.log('Zaliaplaukis');
}

if (plaukai === 'rudos') {
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

const rajonas = 'naujamiestis'
const arVilnius = true;

if (rajonas === 'naujamiestis') {
    if (arVilnius) {
        console.log('Vykti su dviraciu');
    } else {
        console.log('vykti');
    }
}else {
    if (rajonas === 'senamiestis') {
        if (vilnius) {
            console.log('Eiti pesciomis');
        } else {
            console.log('vykti');
        } 
    } else {
        if (rajonas === 'fabijoniskes') {
            if (vilnius) {
            console.log('Vykti automobiliu');
        } else {
            console.log('ne vykti dabar');
        }
        } else {
            console.log('Nezinomas rajonas');
        }
    }
}