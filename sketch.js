var trump;
var scl;

var trumpImg;
var brickImg;
var enemyImg;
var bgImg;

var bricks = [];
var enemies;

var SPACE = 32;
var direction = 1;
var shift = false
var dir = true;
var shifted = false;

var lastCycle = 0;

var juanAnimation;
var trumpSprite; 

function preload(){
    juanAnimation = loadAnimation("assets/juan-1.png", "assets/juan-2.png");
    
    
    trumpImg = loadImage("assets/trump.png");
    brickImg = loadImage("assets/brick.png");
    enemyImg = loadImage("assets/juan.png");

    bgImg = loadImage("assets/bg.jpg");
    
    enemies = new Group();
}

function setup() {
    createCanvas(500, 640);
    scl = 0.35;
    
    trump = new Trump(scl, trumpImg);
    trump.init();
    
    //Create enemies
    var enemy; 
    
    for(var i = 0; i < 5; i++) {
        for(var j = 0; j < 11; j++){
            enemy = new Enemy(((j + 1) * ((enemyImg.width * scl) + ((enemyImg.width * scl) / 2))), i * (enemyImg.height * scl) + ((enemyImg.height * scl) / 2), scl, juanAnimation.clone());
            enemy.init();
            enemies.push(enemy);
            enemy = null;
        }
    }
}

function draw() {
    background(0);
    trump.move();
    
    for(let brick of bricks){
        if(brick.y < 0) {
            bricks = bricks.filter(item => item !== brick);
        }
        
        brick.move();
        brick.show();
   
        for(var i = enemies.length - 1; i > -1 ; i--){
            if(brick.hits(enemies[i])) {
                bricks = bricks.filter(item => item !== brick);
                enemies = enemies.filter(item => item !== enemies[i]);
            }
        }
    }
    
    var time = new Date().getTime();
    
    if(time >= lastCycle + 650) {
        
        enemies.forEach(function(element){
            element.move(direction);
        });
           
        lastCycle = time;
    
    
        enemies.forEach(function(element){
           if(element.onRight()) {
                dir = true;
                direction *= -1;
                shift = true;
            }else if (element.onLeft()){
                dir = false;
                direction *= -1;
                shift = true;
            }
        });
    
       
        if(shift) {
            enemies.forEach(function(element){
                    element.shiftDown(dir);    
            });
            shift = false;
        }
    }
    
    
    
    drawSprites();
    
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
