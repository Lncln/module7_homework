// Задание 4.
// Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах. Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте потребляемую мощность (передайте аргумент). Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.
function ElectricalAppliance(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
}

// метод, который определяет прибор как включенный в розетку
ElectricalAppliance.prototype.plugIn = function () {
console.log(this.name + " is plugged!");
this.isPlugged = true;
};

// метод, который определяет прибор как выключеный из розетки
ElectricalAppliance.prototype.unplug = function () {
console.log(this.name + " is unplugged!");
this.isPlugged = false;
};

ElectricalAppliance.prototype.getPower = function () {
    if (this.isPlugged === true) {
        return this.power;
    } else return 0
}

let lamp = new ElectricalAppliance('lamp', 15);
let pc = new ElectricalAppliance('Computer', 300);
let radio = new ElectricalAppliance('radio', 17);
// включаю в розетку
lamp.plugIn()
pc.plugIn()
// считаю потребляемую мощность всех приборов (Наверное можно вспомогательную функцию сделать?)
console.log(lamp.getPower + pc.getPower + radio.getPower);
