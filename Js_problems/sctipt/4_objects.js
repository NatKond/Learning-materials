document.write (`<p>1) Создайте объект city1, укажите у него свойства name (название города, строка) со значением «ГородN» и population (населенность города, число) со значением 10 млн.</p>`);

const city1 = {
    name: `ГородN`,
    population: 10e6
}

document.write (`<p>2) Создайте объект city2 через нотацию {name: "ГородM", population: 1e6}.</p>`);
const city2 = {
    name: `ГородM`,
    population: 1e6
}

document.write (`<p>3) Создайте у объектов city1 и city2 методы(функцию) getName(), которые вернут соответствующие названия городов.</p>`);

function getName() {return this.name}
city1.getName = getName;
city2.getName = getName;

document.write(`<p>Название первого города: ${city1.getName()}</p>`);
document.write(`<p>Название второго города: ${city2.getName()}</p>`);

document.write (`<p>4) У нас есть объект, в котором хранятся зарплаты нашей команды.</p>`);

const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

document.write (`<p>Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
Если объект salaries пуст, то результат должен быть 0.</p>`);

const sum = salaries.John + salaries.Ann + salaries.Pete;
document.write (`<p> Cумма всех зарплат: ${sum} </p>`);


document.write (`<p>5) Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.</p>`);


const menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(menu){
    Object.keys(menu).forEach(key => {
        if (typeof menu[key] === "number") {
            menu[key] *= 2;
        }
    })
}

/*for (const key of menu) {
    menu[key] = typeof menu[key] === "number" 
        ? menu[key] *=2
        : menu[key];
}*/
document.write (`<p>Элементы объекта: ${objectToString(menu)}<p>`)

multiplyNumeric(menu);
console.log (menu);



function objectToString (){
    let strObj = ``;
    Object.keys(menu).forEach(key => {strObj += menu[key] + ' ';})
    return  strObj;
}
document.write (`<p>Элементы объекта после преобразования: ${objectToString(menu)}<p>`)


