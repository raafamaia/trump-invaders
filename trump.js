var Trump = function(scl, img) {
    this.img = img
    this.scl = scl;
    this.speed = 2;
    this.xdir = 0;
    
    this.width = img.width * scl;
    this.height = img.height * scl;

    this.x = width / 2;
    this.y = height - this.height / 2;
    
    this.show = function () {
        imageMode(CENTER);
        image(this.img, this.x, this.y, this.width, this.height);
    }
    
    this.move = function() {
        this.x += this.xdir;
    }
    
    this.dir = function(dir) {
        //this.x += dir * this.scl;
        this.xdir = dir * this.speed;
    }
    
    
}