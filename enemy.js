var Enemy = function(x, y, scl, img) {
    
    this.x = x;
    this.y = y;
    this.img = img;
    this.scl = scl;
    
    this.width = img.width * scl;
    this.height = img.height * scl;
    
    this.speed = this.width / 2;
        
    this.sprite;
    
    this.init = function() {
        this.img = Object.create(this.img);
        this.img.resize(this.width, this.height);
        this.sprite = createSprite(this.x, this.y, this.width, this.height);
        this.sprite.addImage(this.img);
    }
    
    this.move = function(dir) {
        this.sprite.position.x += this.speed * dir;
    }
    
    this.onRight = function() {
        return ((this.sprite.position.x + this.width / 2) > width);
    }
    
    this.onLeft = function(){
        return ((this.sprite.position.x - this.width / 2) < 0);
    }
    
    this.shiftDown = function(dir) {
        this.sprite.position.y += this.height / 2;
        if(dir) {
            this.sprite.position.x -= this.width / 2;
        } else {
            this.sprite.position.x += this.width / 2;
        }
    }
    
    
}