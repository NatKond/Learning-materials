console.log(`it works`);

const array = [['John', 'Bob', 'Jane'], 
            ['Smith', 'Brown', 'Jameson'], 
            [23, 76, 34]];

for(let i = 0; i < array.length; i++){
    let info = '';
    for(let j = 0; j < array[i].length; j++){
        info = info + ' ' + array[j][i];             
    }
    console.log(info);
}

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

console.log(`${employees[0].first_name} ${employees[0].last_name}`);
// Вывести первого сотрудника
console.log(`${employees[0].first_name} ${employees[0].last_name} ${employees[0].age}`);
// Вывести имена всех сотрудников
for(let i = 0; i<employees.length; i++){
    console.log(employees[i].first_name); 
}
// Вывести имена, фамилии и возраст всех сотрудников
for(let i = 0; i<employees.length; i++){
    console.log(`${employees[i].first_name} ${employees[i].last_name} ${employees[i].age}`);
}

// Вывести имена тех сотрудников, которым больше 40
for (let i = 0; i < employees.length; i++){
    if(employees[i].age > 40){
        console.log(`${employees[i].first_name} ${employees[i].last_name}`);
    }
}