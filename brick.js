var Brick = function(x, y, scl, img) {
    
    this.x = x;
    this.y = y;
    this.img = img;
    this.scl = scl / 2;
    this.speed = 4;
    
    this.show = function () {
        imageMode(CENTER);
        image(this.img, this.x, this.y, this.scl, this.scl);
    }
    
    this.move = function() {
        this.y -=  this.speed;
    }
    
    this.hits = function(obj) {
        var d = dist(this.x, this.y, obj.x, obj.y + obj.height / 2);
        
        return (d < (this.scl /2) + (obj.scl / 2));
    }
    
    
}