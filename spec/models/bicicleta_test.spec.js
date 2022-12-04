var Bicicleta = require('../../models/bicicleta');

beforeEach(() => { Bicicleta.allBicis = []; });

describe('Bicicleta.allBicis', () => {
    it('Comienza vacio', () => {
        expect(Bicicleta.allBicis.length).toBe(0)
    });
});

describe('Bicicleta.add', () => {
    it('Agregamos una', () => {
        expect(Bicicleta.allBicis.length).toBe(0);

        var a = new Bicicleta(1,'rojo','urbana',[-34.6012424, -58.3861497]);
        Bicicleta.add(a);

        expect(Bicicleta.allBicis.length).toBe(1);
        expect(Bicicleta.allBicis[0]).toBe(a);
    });
});

describe('Bicicleta.findById', () => {
    it('debe devolver la bici con id 1', () => {
        expect(Bicicleta.allBicis.length).toBe(0);
        var aBici1 = new Bicicleta(1,'verde','urbana');
        var aBici2 = new Bicicleta(2,'verde','urbana');

        Bicicleta.add(aBici1);
        Bicicleta.add(aBici2);

        var targetBici = Bicicleta.findById(1);
        expect(targetBici.id).toBe(1);
        expect(targetBici.color).toBe(aBici1.color);
        expect(targetBici.modelo).toBe(aBici1.modelo);


    });
});