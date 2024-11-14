document.write(`<p>1) Определите переменные str, num, flag и txt со значениями "Привет", 123, true, "true".</p>`)
let str = `Привет`;
let num = 123;
let flag = true;
let txt = "true"; 
document.write(`<p>При помощи оператора определения типа(typeof) убедитесь, что переменных принадлежат типам: string, number, boolean.</p>`);
document.write(`<p>str: ${str}, type: ${typeof(str)}<p>`);
document.write(`<p>num: ${num}, type: ${typeof(num)}<p>`);
document.write(`<p>flag: ${flag}, type: ${typeof(flag)}<p>`);
document.write(`<p>txt: ${txt}, type: ${typeof(txt)}<p>`);

document.write(`<p> 2) Создайте переменные a1, a2, a3, a4, a5.</p>`);
let a1 = 5 + 3;
let a2 = 5 - 3;
let a3 = 5 * 3;
let a4 = 5 / 3;

document.write(`<p> При помощи математических операторов (сложение, вычитание и т.д.) найдите значения выражений и выведете:</p>
<p> a1 = 5 + 3 = ${a1}</p>
<p> a2 = 5 - 3 = ${a2}</p>
<p> a3 = 5 * 3 = ${a3}</p>
<p> a4 = 5 / 3 = ${a4}</p>`);

document.write(`<p>3) Создайте переменные a6, a7, a8, a9, a10.</p>`);
let a6 = 5 % 3;
let a7 = 3 % 5;
let a8 = 5 + '3';
let a9 = '5' - 3;
let a10 = 75 + 'кг';

document.write(`<p> Поместите в них результат выражений и выведете:</p>
    <p> a6 = 5 % 3  = ${a6}</p>
    <p> a7 = 3 % 5  = ${a7}</p>
    <p> a8 = 5 + '3'  = ${a8}</p>
    <p> a9 = '5' - 3  = ${a9}</p>
    <p> a10 = 75 + 'кг' = ${a10}</p>
    <p> и выведите.</p>`);

document.write(`<p>4) Напишите скрипт, который находит площадь прямоугольника высота 23см. (в числовую переменную height),</p><p>шириной 10см (в числовую переменную width), значение площади должно хранится в числовой переменной s.</p>`);
let height = 23;
let width = 10;
let s = height * width;
document.write (`<p>S = height * width = ${s}</p>`);

document.write(`<p> 5) Напиши скрипт, который находит объем цилиндра высотой 10м (переменная heightC)</p><p>и диаметром основания 4м (dC), результат поместите в переменную v.</p>`);
let heightC = 10;
let dC = 4;
let v = heightC * Math.PI * (dC ** 2) / 4;
document.write (`<p>v = heightC * Math.PI * (dC ** 2) / 4 = ${v}</p>`);

document.write(`<p> 6) У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).</p><p> Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).</p>`)
let n = 3;
let m = 4;
let k = (n**2 + m**2)**(1/2);
document.write (`<p>(n**2 + m**2) ** (1/2) = ${k}</p>`);