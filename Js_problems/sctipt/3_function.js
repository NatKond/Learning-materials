
document.write (`<p>1) Напишите функцию hello1(), которая при вызове будет возвращать строку «Привет, JavaScript!».</p>`);
function hello1() {
    document.write (`<p>Привет, JavaScript!</p>`)
}

hello1();

document.write(`<p>2) Напишите функцию hello2(), которая при вызове будет принимать переменную name (например, «Василий») и выводить строку (в нашем случае «Привет, Василий»).</p>
<p>В случае отсутствующего аргумента выводить «Привет, гость»</p>`);  

function hello2(name = `гость`) {
    document.write (`<p>Привет, ${name}! Как дела?</p>`)
}

const userName = prompt(`Как вас зовут?`);
const userSurname = prompt(`Какая у вас фамилия?`);
const userAge = Number (prompt(`Сколько вам лет`));

hello2 (userName);
hello2();

document.write(`<p>3) Напишите функцию mul(n,m), которая принимает два аргумента и возвращает произведение этих аргументов.</p> 
<p>Проверьте ее работу.</p>`);
const numUser1 = Number(prompt (`Введите первое число`));
const numUser2 = Number(prompt (`Введите второе число`));

document.write(`<p>Первое число: n = ${numUser1}. Второе число: m = ${numUser2}<p>`)
function mul(n = 0,m = 0 ) {
    return n * m;    
}

const summ1 = mul (numUser1, numUser2);
document.write (`<p>n * m = ${numUser1} * ${numUser2} = ${summ1}</p>`);

document.write(`<p>4) Создайте функцию rgb(), которая будет принимать три числовых аргумента и возвращать строку вида «rgb(23,100,134)».</p> 
<p>Если аргументы не заданы, считать их равными нулю. Не проверять переменные на тип данных</p>`);

function rgb(r = 0, g = 0, b = 0) {
    return (`rgb(${r}, ${g}, ${b})`);
}
const red = 255;
const green = 228;
const blue = 196;

document.write(`<p>r = ${red}; g = ${green}, b = ${blue}, rgb() = ${rgb(red, green, blue)}</p>`);
//document.querySelector('body').style.background= rgb(red, green, blue);

document.write(`<p>5) Создайте функцию avg(), которая будет находить среднее значение по всем своим аргументам (аргументы величины числовые).</p>`);

function avg (num1, num2){
    return (num1 + num2 )/2
}

document.write (`<p>Среднее значение введеных чисел: ${avg(numUser1,numUser2)}</p>`);

document.write(`<p>6) Написать функцию, которой передаем, имя, фамилия и возраст, и получаем строку "Привет Иван Петров возраста 17 лет" (только здесь данные, которые были переданы в функцию)</p>`);
function greeting(name, surname, age) {
    return (`<p>Здравствуйте, ${name} ${surname} возраста ${age} лет.<p>`);
}
document.write(greeting(userName,userSurname, userAge));



