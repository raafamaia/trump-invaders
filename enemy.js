var Enemy = function(x, y, scl, img) {
    
    this.x = x;
    this.y = y;
    this.img = img;
    this.scl = scl;
    this.speed = 1;
    
    this.width = img.width * scl;
    this.height = img.height * scl;
    
    this.show = function () {
        imageMode(CENTER);
        image(this.img, this.x, this.y, this.width, this.height);
    }
    
    this.move = function(dir) {
        this.x += this.speed * dir;
    }
    
    this.onRight = function() {
        return ((this.x + this.width / 2) > width);
    }
    
    this.onLeft = function(){
        return ((this.x - this.width / 2) < 0);
    }
    
    this.shiftDown = function() {
        this.y += this.height / 2;
        this.speed += 0.2; //Increases speed
    }
    
    
}