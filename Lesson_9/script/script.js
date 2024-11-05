
let string1 = 'Hello, '
let string2 = 'world'
console.log(+string1 + string2); // конкатенация строк
document.write("<p>" + string1 + string2 + "</p>");

//Задача: есть переменные r, g, b с числовыми значениями. Вывести в консоль строку “rgb(12, 34, 14)” используя конкатенацию и интерполяци
let r = 12;
let g = 34;
let b = 14;
console.log('rgb (' + r + ', ' + g + ', ' + b + ')');
console.log(`rgb (${r}, ${g}, ${b})`);
document.write('<p>rgb (' + r + ', ' + g + ', ' + b + ')</p>');
document.write(`<p>rgb (${r}, ${g}, ${b})</p>`);

