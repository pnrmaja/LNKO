import { szamjegyekOsszege } from "./fugveny.js";

function szamjegyekOsszegeTest(){
    const testEsetLista = [
        { n: 1234, elvart: 10, szoveg: "Többjegyű számmal" },
        { n: 123, elvart: 6, szoveg: "Páratlan szám" },
        { n: 12, elvart: 3, szoveg: "Páros szám" },
        { n: 1, elvart: 2, szoveg: "Egyjegyű szám" },
        { n: 0, elvart: 0, szoveg: "Nullával" },

        


    ];
    for (let i = 0; i < tesztLista.length; i++) {
        let eredmeny = szamjegyekOsszege
        console.assert(
            eredmeny === tesztLista[i].elvart, `n = ${testEsetLista[i].elvart}, kapott = ${eredmeny}`, tesztLista[i].szoveg,
        );
        
    }

}