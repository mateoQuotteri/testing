const arrayLength = require("../toHaveLength");


describe("Prueba de longitud de array",()=> {
    test("El array llamado arrayPrueba tiene 5 elementos...",()=> {
        expect(arrayLength()).toHaveLength(5);
    })
    
})