class Animal {
    constructor(imageUrl, name){
        this.imageUrl = imageUrl;
        this.name = name;
        this.clicks = 0;
    }

    setName(name) {
        this.name = name;
    }

    setUrl(url) {
        this.imageUrl = url;
    }

    setClicks(num) {
        this.clicks = num;
    }
}