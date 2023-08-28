const suma = require("../calc.js");


describe("Prueba de sumas",()=> {
    test("Suma de dos numeros",()=> {
        expect(suma(2,2)).toBe(4);
    })
    test("Suma de dos ceros",()=> {
        expect(suma(0,0)).toBe(0);
    })

})