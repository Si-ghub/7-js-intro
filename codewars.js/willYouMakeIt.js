/*
Automobilis:
- kuro kiekis 2 (galonai)
- kuro apytiksles sanaudos - 1 galonas=25 km
- norimas nuvaziuoti atstumas (kilometrais)=50km
Ar pavyks nuvaziuoti norima atstuma su turimu kuro kiekiu?
*/

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
       
    if (distanceToPump <= mpg * fuelLeft) {
        return true;
    }
        return false;
}


console.log(zeroFuel(50, 25, 2), true);
console.log(zeroFuel(100, 50, 1), false);