let counter = document.querySelector('.counter');
const addNum =document.querySelector('#upCounterBtn');
const minusNum =document.querySelector('#downCounterBtn');

let count = 0;

addNum.addEventListener('click',upCounter);
minusNum.addEventListener('click',downCounter);

function upCounter() {
    count++;
    counter.innerHTML = count;
    if(counter.innerHTML > '0') {
     counter.style.color = '008F11'
    }
    else if(counter.innerHTML === '0'){
     counter.style.color = 'white';
    }
    counter.animate([{opacity:'0.2'},{opacity:'1.0'}],{duration: 400,fill:'forwards'});
}

function downCounter() {
    count --;
    counter.innerHTML = count;
    if(counter.innerHTML < '0') {
     counter.style.color = 'red'
    }
    else if(counter.innerHTML === '0'){
     counter.style.color = 'white';
    }
    counter.animate([{opacity:'0.2'},{opacity:'1.0'}],{duration:400,fill:'forwards'});
}
