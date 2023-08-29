const beLess = require("../beLessThan.js");


describe("Prueba de sumas",()=> {
    test("Resultado menor que...",()=> {
        expect(beLess(10,4)).toBeLessThan(10);
    })


})