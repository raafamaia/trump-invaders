var Brick = function(x, y, scl, img) {
    
    this.x = x;
    this.y = y;
    this.img = img;
    this.scl = scl;
    this.width = (img.width * scl) / 4;
    this.height = img.height * scl;

    this.speed = 6;
    
    this.show = function () {
        imageMode(CENTER);
        image(this.img, this.x, this.y, this.width, this.height);
    };
    
    this.move = function() {
        this.y -=  this.speed;
    };
    
    this.hits = function(obj) {
        var d = dist(this.x, this.y, obj.x, obj.y);
        return (d < this.height / 2 + obj.height / 2);
    };
    
    
};