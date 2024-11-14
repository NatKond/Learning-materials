
let string1 = 'Hello, '
let string2 = 'world'
document.write(`<p>Конкатенация строк: суммирование значений переменных с текстом в кавычках " или '</p>`);
console.log(+string1 + string2);
document.write("<p>" + string1 + string2 + "</p>");
document.write(`<p>Интерполяция строк: запись значений в обратных кавычках</p>`);
document.write(`<p>${string1} ${string2}</p>`);
document.write(`<p>Задача: есть переменные r, g, b с числовыми значениями. Вывести в консоль строку “rgb(12, 34, 14)” используя конкатенацию и интерполяци</p>`);
let r = 12;
let g = 34;
let b = 14;
console.log('rgb (' + r + ', ' + g + ', ' + b + ')');
console.log(`rgb (${r}, ${g}, ${b})`);
document.write('<p>rgb (' + r + ', ' + g + ', ' + b + ')</p>');
document.write(`<p>rgb (${r}, ${g}, ${b})</p>`);

