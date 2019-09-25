let counter = document.querySelector('.counter');
const addNum =document.querySelector('#upCounterBtn');
const minusNum =document.querySelector('#downCounterBtn');

let count = 0;

addNum.addEventListener('click',upCounter);
minusNum.addEventListener('click',downCounter);

function upCounter() {
    count++;
    counter.innerHTML = count;
}

function downCounter() {
    count --;
    counter.innerHTML = count;
}


