// < - меньшне
// > - больше
// <= - меньше или равно
// >= - больше или равно
// = - присвоение
// == - нестрогое сравнение (без сравнения типов)
// === - строгое сравнение (сравнивает типы)
// != - неравно

let nummer1 = Number (prompt(`Введите первое число:`));
let nummer2 = Number (prompt(`Введите второе число:`));
let string3 = prompt(`Введите третье число:`);

console.log(`Первое число больше второго ${nummer1>nummer2}`);
console.log(`Первое число меньше второго ${nummer1<nummer2}`);
console.log(`Первое число меньше или равно второму ${nummer1<=nummer2}`);
console.log(`Первое число больше или равно второму ${nummer1>=nummer2}`);
console.log(`Первое число нестрого равно третьему ${nummer1==string3}`);
console.log(`Первое число строго равно третьему ${nummer1===string3}`);

document.write(
    `<p>Первое число ${nummer1}, второе число ${nummer2}.</p>
    <p>Первое число больше второго ${nummer1>nummer2}</p>
    <p>Первое число меньше второго ${nummer1<nummer2}</p>
    <p>Первое число меньше или равно второму ${nummer1<=nummer2}</p>
    <p>Первое число больше или равно второму ${nummer1>=nummer2}</p>
    <p>Первое число нестрого равно второму ${nummer1==string3}</p>
    <p>Первое число строго равно второму ${nummer1===string3}</p>`)

//Задача.  Написать программу, которая получает два числа и выводит наибольшее

if (nummer1 > nummer2) {
    console.log(`${nummer1} больше ${nummer2}`);
} else if (nummer1 < nummer2){
    console.log(`${nummer2} больше ${nummer1}`);
} else if ((typeof (nummer1) != Number) || (typeof (nummer2) != Number) ){
    console.log(`${nummer1} или ${nummer2} не число`);
}
else {
    console.log(`${nummer2} равно ${nummer1}`);
}

//Задача. Написать программу, которая считывает через prompt одно число и выводит одну из строк “число положительное”, “число отрицательное”, “число равно нулю"

const userNumber = Number (prompt (`Введите число:`));

if (userNumber > 0) {
    console.log(`Число положительное`);
    document.write(`<p>Число положительное</p>`);
} 
else if (userNumber < 0) {
    console.log(`Число отрицательное`);
    document.write(`<p>Число отрицательное</p>`);
}
else if (userNumber === 0){
    console.log(`Число равно нулю`);
    document.write(`<p>Число равно нулю</p>`);
}
else {
    console.log(`Число не является числом`)
    document.write(`<p>Число не является числом</p>`);
}

const month = Number (prompt(`Введите номер месяца`));

if ((month <= 2 && month > 0) || (month === 12)){
    console.log(`Сейчас зима`);
    document.write(`<p>Сейчас зима</p>`);
} else if (month >= 3 && month <= 5){
    console.log(`Сейчас весна`);
    document.write(`<p>Сейчас весна</p>`);
} else if (month >= 6 && month <= 8){
    console.log(`Сейчас лето`);
    document.write(`<p>Сейчас лето</p>`);
} else if (month >= 9 && month <= 11){
    console.log(`Сейчас осень`);
    document.write(`<p>Сейчас осень</p>`);
} else {
    console.log(`Неправильно введен месяц`);
    document.write(`<p>Неправильно введен месяц</p>`);
}