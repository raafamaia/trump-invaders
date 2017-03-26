var Brick = function(x, y, scl, img) {
    
    this.x = x;
    this.y = y;
    this.img = img;
    this.scl = scl;
    this.width = (img.width * scl) / 2;
    this.height = img.height * scl;
    this.speed = 6;
    this.sprite = null;
    
    this.init = function(){
        this.img = Object.create(this.img);
        this.img.resize(this.width, this.height);
        this.sprite = createSprite(this.x, this.y);
        this.sprite.addImage(this.img);
        this.sprite.setSpeed(this.speed,270);
    };

};