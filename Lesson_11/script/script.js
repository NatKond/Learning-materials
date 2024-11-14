let array = [34, 23, 12];
let [a,b,c] = array; // деструктуризация массива
console.log(a, b, c);


let animals = {
    cat : 20,
    dog : 18,
    fish : 5,
}
/*
let property1 = object[`property1`];
let property2 = object[`property2`];
let property3 = object[`property3`]; */
let {dog, fish, cat, fox} = animals; // деструктуризация объекта
console.log(animals);
console.log(`dog: ${dog}, fish: ${fish}, cat: ${cat}, fox: ${fox}`);

let sofa = 1600;
let chair = 450;
let table = 800;
let furniture = {
    sofa,
    chair,
    table
}
console.log(furniture);
console.log(`sofa: ${furniture[`sofa`]}, chair: ${furniture.chair}, table: ${table}`);

let log = console.log;
log(`it works`)


const products =[
    {
        type: `food`,
        name: `milk`,
        price: 34,
        discount: 2
    },
    {
        type: `food`,
        name: `bread`,
        price: 5,
        discount: 5
    },
    {
        type: `food`,
        name: `butter`,
        price: 15,
        discount: 2
    },
    {
        type: `food`,
        name: `coffe`,
        price: 106,
        discount: 10
    },
    {
        type: 'sport',
        name: 'ski',
        price: 345,
        discount: 40
    },
    {
        type: 'sport',
        name:'skates',
        price: 99,
        discount: 50
    },
    {
        type: 'sport',
        name: 'bike',
        price: 400,
        discount: 20
    }
]
let summPrice = 0;
for (let i = 0; i < products.length; i++) {
    console.log(`Name: ${products[i].name}`);
    console.log(`Price: ${products[i].price}€`);
    
    document.write(`<p>Name: ${products[i].name}. Price: ${products[i].price}€</p>`);
    summPrice = summPrice + products[i].price;
}
document.write(`<p><b>Задание:</b> пройдитесь циклом по массиву объектов и найдите общую сумму товаров.</p>`)
console.log(`Summ: ${summPrice}€`);
    
document.write(`<p>Summ: ${summPrice}€</p>`);
document.write(`<p><b>Задание:</b> вывести название товаров, которые дороже 150 </p>`)

for (let i = 0; i < products.length; i++) {
    if (products[i].price>150){
    console.log(`Name: ${products[i].name}`);
    document.write(`<p>Name: ${products[i].name}. Price: ${products[i].price}€</p>`);
    }
}
document.write(`<p><b>Задание:</b> вывести название товаров и цену со скидкой.</p>`)

for (let i = 0; i < products.length; i++) {
    let {name, price, discount} = products[i];//деструктуризация массива
    console.log(`Name: ${name}. Discount: ${discount}. Price with discount: ${(1 - discount/100) *price}`);
    document.write(`<p>Name: ${name}. Price: ${price}€. Discount: ${discount}. Price with discount: ${(1 - discount/100) *price}€.</p>`);
}

document.write(`<p><b>Задание:</b>  пройдитесь циклом по массиву и выведите только спортивные товары.</p>`);
for (let i = 0; i < products.length; i++) {
    const {type, name} = products[i];
    if (type === `sport`) {
        console.log(`Name: ${name}.`);
        document.write(`<p>Name: ${name}.</p>`);
    }
}

document.write(`<p><b>Задание:</b> создайте новый пустой массив. Пройдитесь циклом по массиву с продуктами и в новый массив добавьте те продукты, которые дешевле определенной суммы.</p>`)

const productsCheap = [];
for (let i = 0; i < products.length; i++) {
    const {name, price} = products[i];
    if (price < 100){
        productsCheap.push({name,price});
        console.log(name, price);
    }
}

for (let i = 0; i < productsCheap.length; i++) {
    const {name,price} = productsCheap[i];
    document.write (`<p>Name: ${name}. Price: ${price}€.<p>`)
}