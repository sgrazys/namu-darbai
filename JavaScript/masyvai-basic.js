/* 1.
 Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.
*/

console.log(`PIRMAS.
--------------------
`)

const randArr = [...Array(30)].map(_ => Math.floor(Math.random() * (25 - 5 + 1) + 5));

console.log(randArr);

/* 2. 
Naudodamiesi 1 uždavinio masyvu:
a. Suskaičiuokite kiek masyve yra reikšmių didesnių už 10; */
console.log(`
ANTRAS a.
--------------------
`)

console.log(randArr.filter(a => a > 10).length);

/* b. Raskite didžiausią masyvo reikšmę ir jos indeksą; */

console.log(`
ANTRAS b.
--------------------
`)

console.log(Math.max(...randArr), randArr.indexOf(Math.max(...randArr)));

/* c. Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą; */

console.log(`
ANTRAS c.
--------------------
`)
console.log(randArr.filter((_, i) => i % 2 === 0).reduce((t, n) => t + n, 0));


/* d. Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas; */

/* e. Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad bendras masyvas padidėtų iki indekso 39; */

/* f. Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti sudarytas iš neporinių indeksų reikšmių, o kitas iš porinių (pagal neporinį-porinį indeksą, ne reikšmę); */

/* g. Pirminio masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni už 15; */


/* h. Suraskite pirmą (mažiausią) indeksą, kurio elemento reikšmė didesnė už 10; */


/* 3.
Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.
*/

/* 4.
Sugeneruokite 3 masyvus pagal 3 uždavinio sąlygą. Sudėkite masyvus, sudėdami atitinkamas reikšmes. Paskaičiuokite kiek unikalių (po vieną, nesikartojančių) reikšmių ir kiek unikalių kombinacijų gavote.
*/

/* 5. 
Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis).
*/

/* 6.
Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, kurios yra pirmame 5 uždavinio masyve, bet nėra antrame 5 uždavinio masyve.
*/

/* 7.
Sugeneruokite masyvą iš elementų, kurie kartojasi abiejuose 5 uždavinio masyvuose.
*/

/* 8.
Sugeneruokite masyvą, kurio indeksus sudarytų 5 uždavinio pirmo masyvo reikšmės, o jo reikšmės  būtų iš  antrojo 5 uždavinio masyvo.
*/

/* 9.
Sugeneruokite 10 skaičių masyvą pagal taisyklę: Du pirmi skaičiai- atsitiktiniai nuo 5 iki 25. Trečias, pirmo ir antro suma. Ketvirtas- antro ir trečio suma. Penktas trečio ir ketvirto suma ir t.t.
*/