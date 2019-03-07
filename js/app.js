const firstCat = new Animal('cat.jpg', 'Freddy');
const secondCat = new Animal('secondCat.jpg', 'James');
const thirdCat = new Animal('thirdCat.jpg', 'Jhonny');
const fourthCat = new Animal('fourthCat.jpg', 'Cage');
const fithCat = new Animal('fithCat.jpg', 'Andrea');

const cats = [firstCat, secondCat, thirdCat, fourthCat, fithCat];


for (let index = 0; index < cats.length; index++) {
    const cat = cats[index];    

    const list = document.createElement('li');
    list.textContent = cat.name;
    const elFigure = document.createElement('figure');
    const elHeader = document.createElement('h1');
    elHeader.textContent = cat.name;

    const elImage = document.createElement('img');
    elImage.src = 'images/'+cat.imageUrl;

    const elCaption = document.createElement('figcaption');
    elCaption.innerHTML = 'number of clicks: '+ cat.clicks;
    
    elImage.addEventListener('click', (function(catCopy) {
        return function() {
            catCopy.clicks++;
            elCaption.innerHTML = 'number of clicks: '+ cat.clicks;
        };
    })(cat));

    list.addEventListener('click', (function(catCopy) {
        return function() {
            elHeader.style.visibility="visible";
            elCaption.style.visibility="visible";
        };
    })(cat));

    document.getElementById('list').appendChild(list);
    document.getElementById('main').appendChild(elFigure)
    .appendChild(elHeader);
    elFigure.appendChild(elImage);
    elFigure.appendChild(elCaption);
};