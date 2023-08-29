const arrayContain = require("../toContain");


describe("3 existe en el array",()=> {
    test("Suma de dos numeros",()=> {
        let array =  [1, 2, 3, 4, 5];
        const elementoBuscado = 3;
        expect(arrayContain(elementoBuscado,array)).toBe(true);
    })
    
})