const firstCat = new Animal('cat.jpg', 'Freddy');
const secondCat = new Animal('secondCat.jpg', 'James');
const firstImg = document.getElementById('first-cat');
const secondImg = document.getElementById('second-cat');

let a = 0,
    b = 0;

(() => {
    document.getElementById("name-one").innerHTML = firstCat.name;
    firstImg.src = 'images/'+ firstCat.imageUrl;
    document.getElementById('name-two').innerHTML = secondCat.name;
    secondImg.src = 'images/'+ secondCat.imageUrl;
})();

firstImg.addEventListener('click', function() {
    let num = document.getElementById('num1');
    num.innerHTML = ++a;
}, false);

secondImg.addEventListener('click', function() {
    let num = document.getElementById('num2');
    num.innerHTML = ++b;
}, false);