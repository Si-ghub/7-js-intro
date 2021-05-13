/*
UZDUOTIS:
- duodama, kiek turim geliu
- duodama, kiek viena gele "susilaukia" nauju gelyciu
- duodama, kiek turiu vazonu
- reikia rasti, keliu vazonu truksta?

*/

function flowers(geles, vaikai, vazonai) {
   const visoGeliu = geles * vaikai + geles;
   const reikiaVazonu = visoGeliu - vazonai;

   if(reikiaVazonu <= 0) {
       return 0;
   }

   return reikiaVazonu
}

console.log(flowers(1, 4, 2), '->', 3);
console.log(flowers(10, 1, 5), '->', 15);
console.log(flowers(10, 2, 100), '->', 0);


/*
function flowers(pradinesGeles, reprodukcija, turimVazonai) {
    const visoGeliu = (reprodukcija + 1) * pradinesGeles;
    const reikiaVazonu = visoGeliu - turimVazonai;
    return reikia vazonu
*/