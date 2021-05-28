function skaiciuSarasoSuma(list) {
    let suma = 0;

    for (const item of list) {
        suma += item;
    }

    return suma;
}

module.exports = skaiciuSarasoSuma;