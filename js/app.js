
const listView = {
    init: function() {
        //get the nav html element
        this.navElement = document.getElementById('nav');

        //display the buttons and add an eventlistener to them
        this.render();

    },

    render: function() {
        const cats = octopus.getCats();

        for (let index = 0; index < cats.length; index++) {
            const cat = cats[index];
            
            const button = document.createElement('button');
            button.textContent = cat.name;
            
            const catName = button.innerHTML;            

            button.addEventListener('click', (function(catName) {
                return function() {
                    octopus.changeImage(catName);
                };
            })(catName));
            
            this.navElement.appendChild(button);     
        }
    }
};

const displayView = {
    
    init: function() {
        this.catName = document.getElementById('cat-name');
        this.catImage = document.getElementById('cat-image');
        this.countClicks = document.getElementById('count-click');

        this.catImage.addEventListener('click', function() {
            octopus.incrementClick();
        })

        this.render();
    },

    render: function() {
        const currentCat = octopus.getCurrentCat();;
        
        this.catName.textContent = currentCat.name;
        this.catImage.src = 'images/'+currentCat.imageUrl;
        this.countClicks.textContent = 'amount of clicks made: '+currentCat.clicks;
    }
};

const octopus = {
    init: function() {
        
        model.init();
        //set the current model to the first in line
        model.currentCat = model.cats[0];
        
        //initialize the listview and display view
        listView.init();
        displayView.init();
                
    },

    getCurrentCat: function() {
        return model.currentCat;
    },

    getCats: function() {
        return model.cats;
    },

    getACat: function(nameValue) {
        const cats = this.getCats();
        
        for (let index = 0; index < cats.length; index++) {
            const cat = cats[index];
            
            if (cat.name === nameValue) {
                return cat;
            };
            
        };
    },

    changeImage: function(nameValue) {
        const cat = this.getACat(nameValue);
        model.currentCat = cat;      
        displayView.render();
        
    },

    incrementClick: function() {
        model.currentCat.clicks++;
        displayView.render();
    }
};

const model = {
    currentCat: null,

    cats: [],
    
    init: function() {
        const catOne = new Animal('cat.jpg', 'Freddy');
        const catTwo = new Animal('secondCat.jpg', 'James');
        const catThree = new Animal('thirdCat.jpg', 'Jonny');
        const catFour = new Animal('fourthCat.jpg', 'Cage');
        const catFive = new Animal('fithCat.jpg', 'Andrea');

        this.cats = [catOne, catTwo, catThree, catFour, catFive];
    }
};

octopus.init();