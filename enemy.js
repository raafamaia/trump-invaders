var Enemy = function(x, y, scl, img) {
    
    this.x = x;
    this.y = y;
    this.img = img;
    this.scl = scl;
    
    this.width = img.width * scl;
    this.height = img.height * scl;
    
    this.speed = this.width / 2;
    
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
    
    this.shiftDown = function(dir) {
        this.y += this.height / 2;
        if(dir) {
            this.x -= this.width / 2;
        } else {
            this.x += this.width / 2;
        }
        
        //if(dir) {
        //    this.x = width - (this.width / 2) -1;
        //} else {
        //    this.x = 0 + (this.width / 2) + 1;
        //}
        //this.speed += 0.2; //Increases speed
    }
    
    
}