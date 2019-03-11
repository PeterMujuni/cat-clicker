
const listView = {
    init: function() {
        //get the nav html element
        this.navElement = document.getElementById('nav');

        //display the buttons and add an eventlistener to them
        this.render();

    },

    render: function() {
        const cats = octopus.getCats();
        this.navElement.innerHTML = "";

        for (let index = 0; index < cats.length; index++) {
            const cat = cats[index];
            
            const button = document.createElement('button');
            button.textContent = cat.name;
            
            const catName = button.innerHTML;            

            button.addEventListener('click', (function(catName) {
                return function() {
                    octopus.updateDisplay(catName);
                    octopus.updateAdminDisplay();
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

/**
 * adminView generates the lower postion of the html.
 * from here the HTML is controlled and manipulated.
 */
const adminView = {
    init: function() {
        const adminButton = document.getElementById('admin-button');
        const saveButton = document.getElementById('save-button');
        const cancelButton = document.getElementById('cancel-button');

        octopus.setAdminVisible(true);

        adminButton.addEventListener('click', function() {
            //let currentCat = octopus.getCurrentCat();
            let formSection = document.getElementById('form-section');
            
            
            if(octopus.getAdminVisible()){
                formSection.classList.add("admin-display");
                formSection.classList.remove("admin-non-display");
                saveButton.classList.remove("admin-non-display");
                cancelButton.classList.remove("admin-non-display");
                octopus.setAdminVisible(false);
                adminView.render();                
                
            }else{
                formSection.classList.remove("admin-display");
                formSection.classList.add("admin-non-display");
                saveButton.classList.add("admin-non-display");
                cancelButton.classList.add("admin-non-display");
                octopus.setAdminVisible(true);
            }
            
        });

        saveButton.addEventListener('click', function() {
            octopus.saveAdminInput();;
            console.log('save');
            
        });
        
        cancelButton.addEventListener('click', function() {
            let formSection = document.getElementById('form-section');

            if(!octopus.getAdminVisible()){
                formSection.classList.add("admin-non-display");
                formSection.classList.remove("admin-display");
                saveButton.classList.add("admin-non-display");
                cancelButton.classList.add("admin-non-display");
                octopus.setAdminVisible(true);
                //adminView.render();                
                
            }else{
                formSection.classList.remove("admin-display");
                formSection.classList.add("admin-non-display");
                saveButton.classList.remove("admin-display");
                cancelButton.classList.remove("admin-display");
                octopus.setAdminVisible(false);
            }
        });
        
    },
    render: function() {

        const catInputName = document.getElementById('catName');
        const catInputPicture = document.getElementById('catPicture');
        const catInputClicks = document.getElementById('catClicks');

        const cat = octopus.getCurrentCat();
        
        
        catInputName.value = cat.name;
        catInputPicture.value = cat.imageUrl;
        catInputClicks.value = cat.clicks;

        octopus.setCurrentCat(cat);
        console.log(cat);
        
    }
}

const octopus = {
    init: function() {
        
        model.init();
        //set the current model to the first in line
        model.currentCat = model.cats[0];
        
        //initialize the listview and display view
        listView.init();
        displayView.init();
        adminView.init();
                
    },

    getCurrentCat: function() {
        return model.currentCat;
    },

    setCurrentCat: function(cat) {
        model.currentCat = cat;
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

    updateDisplay: function(nameValue) {
        const cat = this.getACat(nameValue);
        model.currentCat = cat;      
        displayView.render();
        
    },

    incrementClick: function() {
        model.currentCat.clicks++;
        displayView.render();
    },

    getAdminVisible: function() {
        return model.adminShowing;
    },

    setAdminVisible: function(value) {
        model.adminShowing = value;
    },

    updateAdminDisplay: function() {
        listView.render();
        adminView.render();
    },

    saveAdminInput: function() {
        catInputName = document.getElementById('catName').value;
        catInputPicture = document.getElementById('catPicture').value;
        catInputClicks = document.getElementById('catClicks').value;

        const cat = this.getCurrentCat();

        cat.setName(catInputName);
        cat.setUrl(catInputPicture);
        cat.setClicks(catInputClicks);

        displayView.render();        
    }
};

const model = {
    currentCat: null,

    adminShowing: false,

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