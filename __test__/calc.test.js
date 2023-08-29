const suma = require("../calc.js");


describe("Prueba de sumas",()=> {
    test("Suma de dos numeros",()=> {
        expect(suma(2,2)).toBe(4);
    })
    /*
    test("Suma de dos ceros",()=> {
        expect(suma(0,0)).toBe(0);
    })*/ 
    test("Resultado mayor que...",()=> {
        expect(suma(10,10)).toBeGreaterThan(10);
    })
    test("Resultado Null...",()=> {
        expect(suma(0,0)).toBeNull();
    })

})