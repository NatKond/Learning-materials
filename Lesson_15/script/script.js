const h2 = document.querySelector(`h2`);
h2.innerText = `Новый заголовок 15 урока из JavaScript`;
console.log(document.querySelector(`h2`));
const p = document.createElement(`p`);
p.innerText = `содержимое элемента`
const example = document.querySelector(`.example`);
example.style = `border: 2px solid`;
example.append(p);

example.before(`перед элементом`); //добавляет перед выбранным элементом
example.prepend(`внутрь элемента в начале`);
example.append(`внутрь элемента в конце`);
example.after(`после элемента`);

// Написать программу, которая запрашивает у пользователя картинку и ссылку на статью (любую)
// и формирует в интерфейсе картинку и внутри ссылку, указанную пользователем

const root = document.querySelector(`#root`);
function createCard(image,link){
    const container = document.createElement(`div`); //создаем карточку

    const img = document.createElement(`img`);//добавили элемент картинка
    img.setAttribute(`src`, image); //добавляеи ссылку на картинку

    const a = document.createElement(`a`);//добавялем элемент ссылка
    a.append(img); //добавляем картинку внутрь ссылки
    a.setAttribute(`href`,link);//добавляем ссылку внутрь
    
    container.append(a);
    return container;
}

const container = createCard(`lion.jpg`,`https://en.wikipedia.org/wiki/Lion`);
const body = document.querySelector(`body`);

root.append(container);
//Создать множество карточек с товарами (на основе массива с объектами. У объекта есть свойства title, unit_price, count)
const card = [
    {
        title: 'Milk',
        unit_price: 50,
        count: 3
    },
    {
        title: 'Kaffee',
        unit_price: 80,
        count: 5
    },
    {
        title: 'Ice cream',
        unit_price: 30,
        count: 2
    },
    { 
        title: 'Chocolate',
        unit_price: 20,
        count: 5
    },
]

const itemMenu = document.createElement(`div`);
itemMenu.className = `itemMenu`;
itemMenu.style = `display:flex`;


for (let i = 0; i < card.length; i++) {
    const element = card[i];
    const h2 = document.createElement(`h2`);
    const p1 = document.createElement(`p`);
    const p2 = document.createElement(`p`);
    h2.innerText = element.title;
    p1.innerText = `Цена: ${element.unit_price}`;
    p2.innerText = `Остатки: ${element.count}`;
    const div = document.createElement(`div`);
    div.className = `card`;
    div.append(h2,p1,p2);
    div.className = `card-item`;
    itemMenu.append(div);
}


const allCount = document.createElement(`h3`);
const allPrice = document.createElement (`h3`);
let sumCount = 0;
let sumPrice = 0;



for (let i = 0; i < card.length; i++) {
    const item = card[i];
    sumCount = sumCount + item.count;
    sumPrice = sumCount + item.unit_price;
}
allCount.innerText = `Total amount: ${sumCount}`;
allPrice.innerText = `Total price: ${sumPrice}`;

root.after(allCount);
root.after(allPrice);
root.after(itemMenu);


function summ(a, b) {
    return (a + b);
}

function sub (a, b){
    return (a - b);
}

function multi(a, b) {
    return (a*b);
}

function division (a,b){
    return (a/b);
}
function printResult(num1, num2, f) {
    console.log(`Результат: ${f(num1, num2)}`);
}

printResult(23, 54, summ);
printResult(54, 24, sub);
printResult(5, 6, multi);
printResult(45,15, division)


const list = [5,15,2,6];
for (let i = 0; i < list.length; i++) {
    console.log(i);
}

list.forEach(function (i) {
    console.log(i);
})

const btn1 = document.querySelector(`#button1`);
btn1.addEventListener(`click`, clickElem);

function clickElem(){
    console.log(`Hello,world`);
}
const btn2 = document.querySelector(`#button2`);
let count = 0;
btn2.addEventListener(`click`, function(){console.log(`${count=count+1}`)});
