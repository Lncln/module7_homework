// Задание 2.
// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.
function checkObjKey(str, obj){
    for (let key in obj){
        if (key === str){
            return true;
        } 
    }
    return false;
}
// let Hero = {Level: 99, Class: 'Wizard', PrimaryAttribute: 'Int'};
console.log(checkObjKey('Class',{Level: 99, Class: 'Wizard', PrimaryAttribute: 'Int'}));
// Видимо надо так
function checkObjKey(str, obj){
    console.log(str in obj)
}
checkObjKey('Class',{Level: 99, Class: 'Wizard', PrimaryAttribute: 'Int'}); 