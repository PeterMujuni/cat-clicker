const firstCat = new Animal('cat.jpg', 'Freddy');
const secondCat = new Animal('secondCat.jpg', 'James');
const thirdCat = new Animal('thirdCat.jpg', 'Jonny');
const fourthCat = new Animal('fourthCat.jpg', 'Cage');
const fithCat = new Animal('fithCat.jpg', 'Andrea');




const viewList = {
    init: function(objList) {
        objList.forEach(function(obj) {
            const button = document.createElement('button');
            button.textContent = obj.name;
            document.getElementById('nav').appendChild(button);

            button.addEventListener('click', function(){
                let valueEl = button.innerHTML;
                //console.log(valueEl);
                octopus.changeDisplay(valueEl);
            });
        });
    }
};

const viewDisplay = {
    frame: document.createElement('figure'),
    nameHeader: document.createElement('h1'),
    imgFrame: document.createElement('img'),
    capElement: document.createElement('figcaption'),
    
    init: function(obj) {
        document.getElementById('main').appendChild(viewDisplay.frame);
        viewDisplay.frame.appendChild(viewDisplay.nameHeader);
        viewDisplay.frame.appendChild(viewDisplay.imgFrame);
        viewDisplay.frame.appendChild(viewDisplay.capElement);
    },
    renderDisplay: function(obj) {
        viewDisplay.nameHeader.textContent = obj.name;
        viewDisplay.imgFrame.src = 'images/'+obj.imageUrl;
        viewDisplay.capElement.textContent = 'numbers of clicks are: '+obj.clicks;
    }
};

const octopus = {
    initDisplay: function() {
        viewDisplay.init()
    },
    renderList: function() {
        viewList.init(model.getObjects());
    },
    renderDisplay: function() {
        viewDisplay.renderDisplay(model.getFirstObj());
    },
    changeDisplay: function(value) {
        let obj = model.getAnObj(value);
        viewDisplay.renderDisplay(obj);
        
    }
}

const model = {
    cats: [firstCat, secondCat, thirdCat, fourthCat, fithCat],
    
    init: function() {

        if(!localStorage.objs){
            localStorage.objs = JSON.stringify(model.cats);
        }
    },
    getFirstObj: function() {
        return model.cats[0];
    },
    getAnObj: function(value) {
        for (let index = 0; index < model.cats.length; index++) {
            if (value === model.cats[index].name) {
                return model.cats[index];
            }
            
        }
    },
    getObjects: function() {
        return JSON.parse(localStorage.objs);
    }
    
};

model.init();
octopus.renderList();
octopus.initDisplay()  
octopus.renderDisplay();

    
//     elImage.addEventListener('click', (function(catCopy) {
//         return function() {
//             catCopy.clicks++;
//             elCaption.innerHTML = 'number of clicks: '+ cat.clicks;
//         };
//     })(cat));

//     list.addEventListener('click', (function(catCopy) {
//         return function() {
//             elHeader.style.visibility="visible";
//             elCaption.style.visibility="visible";
//         };
//     })(cat));