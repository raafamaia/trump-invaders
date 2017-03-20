var trump;
var scl;

var trumpImg;
var brickImg;
var enemyImg;
var bgImg;

var bricks = [];
var enemies = [];

var SPACE = 32;
var direction = 1;
var shift = false;

function preload(){
     trumpImg = loadImage("assets/trump.png");
     brickImg = loadImage("assets/brick.png");
     enemyImg = loadImage("assets/juan.png");

    bgImg = loadImage("assets/bg.jpg");
}

function setup() {
    createCanvas(bgImg.width, bgImg.height);
    scl = 0.35;
    
    trump = new Trump(scl, trumpImg);
    for(var i = 0; i < 7; i++){
        enemies.push(new Enemy(i * enemyImg.width + enemyImg.width, enemyImg.height / 2, scl, enemyImg));
    }
}

function draw() {
    //background(bgImg);
    background(0);
    
    trump.move();
    trump.show();
    
    for(let brick of bricks){
        if(brick.y < 0) {
            bricks = bricks.filter(item => item !== brick);
        }
        
        brick.move();
        brick.show();
        
        for(let enemy of enemies){
            
            if(brick.hits(enemy)){
                bricks  = bricks.filter(item => item !== brick);
                enemies = enemies.filter(item => item !== enemy);
            }
            
        }
    }
    
    
    
    enemies.forEach(function(element){
        if(element.onRight() || element.onLeft()){
            direction *= -1;
            shift = true;
        }
    });
    
    if(shift){
        enemies.forEach(function(element){
            element.shiftDown();
        });
        shift = false;
    }
    
    for(let enemy of enemies){
        enemy.move(direction);    
        enemy.show();
    }
}

function keyReleased() {
    switch(keyCode){
        case LEFT_ARROW:
            trump.dir(0);
            break;
        case RIGHT_ARROW:
            trump.dir(0);
            break;
    }
}

function keyPressed() {
    
    switch(keyCode){
        
        case LEFT_ARROW:
            trump.dir(-1);
            break;
        case RIGHT_ARROW:
            trump.dir(1);
            break;
        case SPACE:
            var brick = new Brick(trump.x, trump.y - (trump.height / 2) - (brickImg.height * scl / 2), scl, brickImg);
            bricks.push(brick);
    }
    
    
}
