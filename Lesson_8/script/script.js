//alert('hello world')
document.write('Hello world');
let hello='Hallo! Wie gets?';
console.log(hello);

const plus = document.querySelector('button');
const result = document.querySelector('p');
let count = 0;

plus.addEventListener('click',function(){
    count = count +1;
    result.innerText = 'Значение счетчика '+ count;
    console.log(count);
})

