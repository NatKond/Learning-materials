console.log(`it works`);

console.log(document.body);

document.body.style.backgroundColor = 'darksalmon';
document.querySelector(`h1`).style.fontSize = `30px`;
//document.querySelector(`div`).style.backgroundColor = `beige`;

const elemDiv = document.querySelector(`div`);
elemDiv.style = `color:darkslategrey ;background-color: beige;`;
const elemH1 = document.querySelector(`h1`);
elemH1.innerText = `Выбор элементов DOM при помоощи querySelector в JS`;
const elemsP = document.querySelectorAll(`p`);
for (let i = 0; i < elemsP.length; i++) {
    elemsP[i].style.color = `crimson`;  
}

const link = document.querySelector(`a`);
//link.innerText = `я тэг ссылка на страницу со всем  учебными материалами`;
link.style = `text-decoration: none;; font-size: 20px; color: darkblue`;
link.setAttribute(`href`,`https://natkond.github.io/Learning-materials/`);
link.setAttribute(`target`,`blank`);
const img = document.querySelector (`img`);
img.setAttribute(`src`, `./media/kitten.jpeg`)
//const block = document.querySelector(`.block`);
//block.style.color = `crimson`;

// 1. Найти элемент куда я хочу добавить новый элемеент 
// который я зоздам
const block = document.querySelector('.block');
// 2. Созаем новый элемент
const newElemP1 = document.createElement('p');
// 3. Добавляем контент или стили
newElemP1.innerText = 'Задача. Создать множество параграфов с числами от 0 до 19.';
// 4. В найденый элемент добавляем новый элемент
block.append(newElemP1);

for (let i = 0; i < 20; i++) {
    const newP = document.createElement('p');
    newP.innerText = `${i}`;
    block.append(newP);
    console.log(newP);
}

const newElemP2 = document.createElement('p');
newElemP2.innerText =`Задача. Написать цикл, который проходится по массиву строк и для каждого создает параграф и добавляет в #root.`;


const root = document.querySelector(`#root`);
root.append(newElemP2);
root.style = `color:darkslategrey ;background-color: beige;`;
const wordsArr = ['hello ', 'how ', 'are ', 'you ', 'i ', 'am ', 'fine'];
for (let i = 0; i < wordsArr.length; i++) {
    const newP = document.createElement('p');
    newP.innerText = `${wordsArr[i]}`;
    root.append(newP);
    console.log(newP);
}

const newElemP3 = document.createElement(`p`);
newElemP3.innerText = `Задача. Массив из объектов со свойствами link и title. Свойства хранят в себе ссылку на страницу и название страницы соответственно. Напишите цикл, который создаст для каждого объекта ссылку и добавит в #root`;
root.append(newElemP3);

const arr = [
    {link: 'https://www.apple.com/', title: 'Apple'},
    {link: 'https://www.samsung.com/ru/', title: ' Samsung'},
    {link: 'https://www.mi.com/ru/', title: ' Xiaomi'}
]

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    newLink = document.createElement(`a`);
    newLink.setAttribute(`href`, element.link);
    newLink.setAttribute(`title`, element.title);
    newLink.innerText = element.title;
    root.append(newLink);
    console.log(newLink);
}
