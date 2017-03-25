var Trump = function(scl, img) {
    
    this.scl = scl;
    this.speed = 2;
    this.xdir = 0;
    
    this.width = img.width * scl;
    this.height = img.height * scl;

    this.x = width / 2;
    this.y = height - this.height / 2;
    
    this.img = img;
    
    this.sprite = null;
    
    this.init = function() {
        imageMode(CENTER);
        this.img.resize(this.width, this.height);
        this.sprite = createSprite(this.x, this.y, this.width, this.height);
        this.sprite.addImage(this.img);
    };

    this.move = function() {
        this.sprite.position.x += this.xdir;
    };
    
    this.dir = function(dir) {
        this.xdir = dir * this.speed;
        this.sprite.mirrorX(dir);
    };
};