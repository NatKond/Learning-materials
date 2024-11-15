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