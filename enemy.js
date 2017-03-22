var Enemy = function(x, y, scl, anim) {
    
    this.x = x;
    this.y = y;
    this.anim = anim;
    this.scl = scl;
    
    this.width;
    this.height;
    
    this.speed;
    this.sprite;
    
    this.init = function() {
        //this.img = Object.create(this.img);
        //this.img.resize(this.width, this.height);
        this.sprite = createSprite(this.x, this.y);
        this.sprite.addAnimation("normal", this.anim);
        
        this.sprite.scale = this.scl;
        
        this.width = (this.sprite.width * this.scl);
        this.height = (this.sprite.height * this.scl);
        this.speed = this.width / 2;
        
    }
    
    this.move = function(dir) {
        this.sprite.position.x += this.speed * dir;
        this.sprite.animation.frameDelay = 38.5;
        //this.sprite.animation.changeFrame();
    }
    
    this.onRight = function() {
        return ((this.sprite.position.x + this.width / 2) > width);
    }
    
    this.onLeft = function(){
        return ((this.sprite.position.x - this.width / 2) < 0);
    }
    
    this.shiftDown = function(dir) {
        this.sprite.position.y += this.height / 2;
        //if(dir) {
        //    this.sprite.position.x -= this.width / 2;
        //} else {
        //    this.sprite.position.x += this.width / 2;
        //}
    }
    
    
}