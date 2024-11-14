// < - меньшне
// > - больше
// <= - меньше или равно
// >= - больше или равно
// = - присвоение
// == - нестрогое сравнение (без сравнения типов)
// === - строгое сравнение (сравнивает типы)
// != - неравно
let string1 = prompt(`Введите первое число:`);
let nummer1 = Number (string1);
let nummer2 = Number (prompt(`Введите второе число:`));


console.log(`Первое число больше второго ${nummer1>nummer2}`);
console.log(`Первое число меньше второго ${nummer1<nummer2}`);
console.log(`Первое число меньше или равно второму ${nummer1<=nummer2}`);
console.log(`Первое число больше или равно второму ${nummer1>=nummer2}`);
console.log(`Первое число нестрого равно введенному первому значению ${nummer1==string1}`);
console.log(`Первое число строго равно введенному первому значению ${nummer1===string1}`);

document.write(
    `<p>Первое число: ${nummer1}, второе число: ${nummer2}</p>
    <p>Первое число больше второго ${nummer1>nummer2}</p>
    <p>Первое число меньше второго ${nummer1<nummer2}</p>
    <p>Первое число меньше или равно второму ${nummer1<=nummer2}</p>
    <p>Первое число больше или равно второму ${nummer1>=nummer2}</p>
    <p>Первое число нестрого равно введенному через prompt значению ${nummer1==string1}</p>
    <p>Первое число строго равно введенному через prompt значению ${nummer1===string1}</p>`)

document.write(`<p>Задача.  Написать программу, которая получает два числа и выводит равенство или неравенство</p>`)
if (nummer1 > nummer2) {
    document.write(`<p> ${nummer1} > ${nummer2}</p>`);
} else if (nummer1 < nummer2){
    document.write(`<p> ${nummer2} > ${nummer1}</p>`);
} else if (nummer1 === nummer2){
    document.write(`<p> ${nummer2} = ${nummer1}</p>`);
}

//else if ((typeof (nummer1) != `number`) || (typeof (nummer2) != `number`) || (nummer1 === NaN) || (nummer2 === NaN) ){
    //document.write(`<p> ${nummer1} или ${nummer2} не число.}</p>`);}


document.write(`<p>Задача. Написать программу, которая считывает через prompt одно число и выводит одну из строк “число положительное”, “число отрицательное”, “число равно нулю"</p>`);

if (nummer1 > 0) {
    console.log(`Первое число положительное`);
    document.write(`<p>Первое число положительное</p>`);
} 
else if (nummer1 < 0) {
    console.log(`Первое число отрицательное`);
    document.write(`<p>Первое число отрицательное</p>`);
}
else if (nummer1  === 0){
    console.log(`Первое число равно нулю`);
    document.write(`<p>Первое число равно нулю</p>`);
}
else {
    console.log(`Введенное значение не является числом`)
    document.write(`<p>Введенное значение не является числом</p>`);
}

const month = Number (prompt(`Введите номер месяца`));

document.write(`<p>Введенный номер месяца: ${month}</p>`);

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