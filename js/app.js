const cat_element = document.getElementById('cat-image');
let x = 0;
cat_element.addEventListener('click', function() {
    let num = document.getElementById('num');
    num.innerHTML = ++x;
}, false);