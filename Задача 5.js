// Задание 5.
// Переписать консольное приложение из предыдущего юнита на классы.
class ElectroDevice {
    constructor(name, power){
        this.name = name;
        this.power = power;
        this.isPlugged = false;
    }
    getPower(){
        if (this.isPlugged === true){
            return this.power;
        } else {
            return 0;
        } 
    }
    setPlugIn(){
        this.isPlugged = true;
        console.log(this.name + " is plugged!");
    }
    setUnPlug(){
        this.isPlugged = false;
        console.log(this.name + " was unplugged!");
    }

}
let pc = new ElectroDevice('lomputer', 750);
let lamp = new ElectroDevice('lamp', 18);
let radio = new ElectroDevice('radio', 17);
// включаю в розетку
lamp.setPlugIn();
radio.setPlugIn();
// считаю потребляемую мощность всех приборов (Наверное можно вспомогательную функцию сделать?)
console.log(lamp.getPower() + pc.getPower() + radio.getPower() + 'W');
// Других вариантов не представляю