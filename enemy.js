var Enemy = function(x, y, scl, img) {
    
    this.x = x;
    this.y = y;
    this.img = img;
    this.scl = scl / 2;
    this.speed = 1;
    
    this.width = map(this.scl, 0, this.scl, 0, 78);
    this.height = map(this.scl, 0, this.scl, 0, 128);
    
    
    this.show = function () {
        imageMode(CENTER);
        image(this.img, this.x, this.y, this.width, this.height);
    }
    
    this.move = function(dir) {
        this.x += this.speed * dir;
    }
    
    this.onRight = function() {
        return ((this.x + scl / 2) > width);
    }
    
    this.onLeft = function(){
        return ((this.x - this.scl / 2) < 0);
    }
    
    this.shiftDown = function() {
        this.y += this.scl;
    }
    
    
}