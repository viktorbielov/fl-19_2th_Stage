class Toy {
    constructor (name, price){
        if (this.constructor === Toy) {
            try{
                throw new Error('Cannot create instance of a "Toy". This class is abstract');
            } catch (e) {
                console.error(e);
            }
        }
        this.name = name;
        this.price = price;
    }

    getToyInfo(){
        return `The toy name is ${this.name}. It costs ${this.price} dollars.`
    }
}


class Teddy extends Toy {
    constructor (name, price){
        super(name,price);
        this.material = 'cotton';
    }

    getMaterialInfo() {
        return `The toy ${this.name} was made of ${this.material}.`
    }
}


class PlasticToy extends Toy {
    constructor (name, price){
        super(name,price);
        this.material = 'plastic';
    }

    getMaterialInfo() {
        return `The toy ${this.name} was made of ${this.material}.`
    }
}


class WoodenToy extends Toy {
    constructor (name, price){
        if (typeof WoodenToy.instance === 'object') {
            return WoodenToy.instance;
        }
        super(name,price);
        this.material = 'wood';
        WoodenToy.instance = this;
        return this;
    }

    getMaterialInfo() {
        return `The toy ${this.name} was made of ${this.material}.`
    }
}


class Factory {
    constructor (){
        this.instances = [];
        this.wooden = null;
    }
    
    static getToyByType(type) {
        switch(type) {
            case 'teddy': {
                return Teddy;
            }
            case 'wooden': {
                return WoodenToy;
            }
            default: {
                return PlasticToy;
            }
        }
    }

    produce (name, price, type='plastic') {
        if (this.getElement(name)){
            return this.getElement(name);
        } else {
            const Choise = Factory.getToyByType(type);
            const instance = new Choise(name,price,type);
            this.instances.push(instance);
            return instance;
        }
    }

    getElement (name) {
        return this.instances.find(item => item.name === name);
    }
}


const factory = new Factory();
/* eslint-disable no-magic-numbers */
const teddyBear = factory.produce('Bear', 200, 'teddy');
console.log(teddyBear.getToyInfo());
console.log(teddyBear.getMaterialInfo());
/* eslint-disable no-magic-numbers */
const plasticCar = factory.produce('Car', 100);
console.log(plasticCar.getToyInfo());
console.log(plasticCar.getMaterialInfo());
/* eslint-disable no-magic-numbers */
const plasticBear = factory.produce('Bear', 150, 'plastic');
console.log(plasticBear.getToyInfo());
console.log(plasticBear.getMaterialInfo());
/* eslint-disable no-magic-numbers */
const woodenHorse = factory.produce('Horse', 400, 'wooden');
console.log(woodenHorse.getToyInfo());
/* eslint-disable no-magic-numbers */
const woodenBear = factory.produce('bear', 200, 'wooden');
console.log(woodenBear.getToyInfo());

class Car {
    constructor(name, host) {
        this.name = name;
        this.host = host;
    }

    carSound() {
        return 'Usual car sound.';
    }
}

const ambulanceCar = car => {
    car.ambulanceSound = () => 'Siren sound.';
    return car;
}

const mercedes = new Car('Mercedes','Doctor');
const ambulanceMercedes = ambulanceCar(mercedes);
console.log(ambulanceMercedes.ambulanceSound());

const toyota = new Car('Toyota','Doctor2');
const ambulanceToyota = ambulanceCar(toyota);
console.log(ambulanceToyota.ambulanceSound());