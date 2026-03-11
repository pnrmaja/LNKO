import { primSzam } from "./fugveny.js";

function primSzamTest(){
    const testEsetLista = [
        { n: 0, false, szoveg: "Többjegyű számmal" },
        { n: 1, elvart: 6, szoveg: "Páratlan szám" },
        { n: 2, elvart: 3, szoveg: "Páros szám" },
        { n: , elvart: 2, szoveg: "Egyjegyű szám" },
        { n: 0, elvart: 0, szoveg: "Nullával" },

        


    ];
    for (let i = 0; i < tesztLista.length; i++) {
        let eredmeny = szamjegyekOsszege
        console.assert(
            eredmeny === tesztLista[i].elvart, `n = ${testEsetLista[i].elvart}, kapott = ${eredmeny}`, tesztLista[i].szoveg,
        );
        
    }

}