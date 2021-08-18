let convas1 = document.getElementById('convas1');
let convas2 = document.getElementById('convas2');

let star1 = document.getElementById('star1');
let star2 = document.getElementById('star2');
let star3 = document.getElementById('star3');
let star4 = document.getElementById('star4');
let star5 = document.getElementById('star5');

star1.addEventListener('click', function() {
    convas2.style.backgroundColor = 'red';
});

star2.addEventListener('click', function() {
    convas2.style.backgroundColor = 'blue';
});

star3.addEventListener('click', function() {
    convas2.style.backgroundColor = 'green';
});

star4.addEventListener('click', function() {
    convas2.style.backgroundColor = 'yellow';
});

star5.addEventListener('click', function() {
    convas2.style.backgroundColor = 'black';
});

convas1.addEventListener('click', function() {
    convas2.style.backgroundColor = 'white';
});