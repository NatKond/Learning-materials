console.log(`it works`);

const h21 = document.createElement(`h2`);
h21.innerText = `Двухмерный массив`;
document.body.append(h21);
const array = [['John', 'Bob', 'Jane'], 
            ['Smith', 'Brown', 'Jameson'], 
            [23, 76, 34]];

for(let i = 0; i < array.length; i++){
    let info = '';
    for(let j = 0; j < array[i].length; j++){
        info = info + ' ' + array[j][i];             
    }
    let p = document.createElement(`p`);
    p.innerText = info;
    document.body.append(p);
}

const h22 = document.createElement(`h2`);
h22.innerText = `Массив объектов`;
document.body.append(h22);

const employees = [
    {
        first_name: `John`,
        last_name: `Smith`,
        age: 45
    },
    {
        first_name: `Bob`,
        last_name: `Brown`,
        age: 76
    },
    {
        first_name: `Jane`,
        last_name: `Jameson`,
        age: 45
    }
]

const Pr1 = document.createElement(`p`);
Pr1.innerText = `Вывести первого сотрудника`;
document.body.append(Pr1);

const elemArray = document.createElement(`p`);
elemArray.innerText = `${employees[0].first_name} ${employees[0].last_name} ${employees[0].age}`;
document.body.append(elemArray);

const Pr2 = document.createElement(`p`);
Pr2.innerText = `Вывести имена всех сотрудников`;
document.body.append(Pr2);

for(let i = 0; i<employees.length; i++){
    const p = document.createElement(`p`)
    p.innerText = employees[i].first_name;
    document.body.append(p); 
}
const Pr3 = document.createElement(`p`);
Pr3.innerText = `Вывести имена, фамилии и возраст всех сотрудников`;
document.body.append(Pr3);

for(let i = 0; i<employees.length; i++){
    const p = document.createElement(`p`)
    p.innerText = `${employees[i].first_name} ${employees[i].last_name} ${employees[i].age}`;
    document.body.append(p);
}

const Pr4 = document.createElement(`p`);
Pr4.innerText = `Вывести имена тех сотрудников, которым больше 40`;
document.body.append(Pr4);

for (let i = 0; i < employees.length; i++){
    if(employees[i].age > 40){
        const p = document.createElement(`p`)
        p.innerText =`${employees[i].first_name} ${employees[i].last_name}`;
        document.body.append(p);
    }
}

const h23 = document.createElement(`h2`);
h23.innerText = `Работа с функциями`;
document.body.append(h23);

//function declaration
function getSum1(num1, num2){
    const sum = num1 + num2;
    console.log(sum);
    return (sum);
}
//function expration
getSum1(10, 6); // Cannot access 'get_sum' before initialization
let getSum2 = function(num1, num2){
    let sum = num1 + num2;
     console.log(sum);    
}
getSum2(3, 6); // 9

//Например, функции, начинающиеся с "show" обычно что-то показывают. Функции, начинающиеся с… • "get…" – возвращают значение, • "calc…" – что-то вычисляют, • "create…" – что-то создают, • "check…" – что-то проверяют и возвращают логическое значение, и т.д.

function checkAge (age){
    if (age > 18){
        return true;
    }else {
        return false;
    }
}

const userAge = Number(prompt(`Введите свой возраст:`));

const check = document.createElement(`p`);
check.innerText = `Вы старше 18? ${checkAge(userAge)}`;
document.body.append(check);

const Pr5 = document.createElement(`p`);
Pr5.innerText = `Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.`;
document.body.append(Pr5);

const n = Number(prompt(`Введите число:`));
function getSum(n) {
    let sum = 0;
    for (let i = 1; i < n + 1; i++ ){
        sum += i;   
    }
    return sum;
}


const answer1 = document.createElement(`p`);
answer1.innerText = `Введенное число: ${n}. Сумма чисел: ${getSum(n)}`;
document.body.append(answer1);

const Pr6 = document.createElement(`p`);
Pr6.innerText = `Напишите функцию, которая принимает массив чисел и возвращает сумму всех элементов.`;
document.body.append(Pr6);

function getArraySum(array) {
    let summ = array[0];
    for (let i = 1; i < array.length; i++) {
        summ += array[i];
    }
    return summ
}

const answer2 = document.createElement(`p`);
answer2.innerText = `Введенный массив: [10, 3, 0, 26, -4]. Сумма чисел: ${getArraySum([10, 3, 0, 26, -4])}`;
document.body.append(answer2);