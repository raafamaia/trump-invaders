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
var shift = false
var dir = true;

var lastCycle = 0;

var juanAnimation;
var trumpSprite; 

function preload(){
    juanAnimation = loadAnimation("assets/juan-1.png", "assets/juan-2.png");
    
    
    trumpImg = loadImage("assets/trump.png");
    brickImg = loadImage("assets/brick.png");
    enemyImg = loadImage("assets/juan.png");

    bgImg = loadImage("assets/bg.jpg");
}

function setup() {
    createCanvas(500, 640);
    scl = 0.35;
    
    trump = new Trump(scl, trumpImg);
    trump.init();
    
    //Create enemies
    for(var i = 0; i < 5; i++) {
        var enemy_row = [];
        for(var j = 0; j < 11; j++){
            var enemy = new Enemy(((j + 1) * ((enemyImg.width * scl) + ((enemyImg.width * scl) / 2))), i * (enemyImg.height * scl) + ((enemyImg.height * scl) / 2), scl, enemyImg);
            enemy_row.push(enemy);
        }
        enemies[i] = enemy_row;
    }
}

function draw() {
    //background(bgImg);
    background(0);
    
    trump.move();
    //trump.show();
    
    for(let brick of bricks){
        if(brick.y < 0) {
            bricks = bricks.filter(item => item !== brick);
        }
        
        brick.move();
        brick.show();
        
        for(var i = enemies.length - 1; i > -1 ; i--){
            for(var j = enemies[i].length - 1; j > -1; j--){
                if(brick.hits(enemies[i][j])){
                    bricks = bricks.filter(item => item !== brick);
                    enemies[i] = enemies[i].filter(item => item !== enemies[i][j]);
                }
            }
        }

        //for(let enemy_row of enemies){
        //    enemy_row.forEach(function(enemy){
        //        if(brick.hits(enemy)){
        //            bricks  = bricks.filter(item => item !== brick);
        //            enemies = enemies.filter(item => item !== enemy);
        //        }    
        //    });
        //}
    }
    
    enemies.forEach(function(row){
            row.forEach(function(element){
               if(element.onRight()){
                direction *= -1;
                shift = true;
                dir = true;
            }else if (element.onLeft()){
                direction *= -1;
                shift = true;
                dir = false;
            }
        })
    });
    
    if(shift){
        enemies.forEach(function(row){
            row.forEach(function(element){
                element.shiftDown(dir);    
            })
        });
        shift = false;
    }
    
    
    var time = new Date().getTime();
    
    if(time > lastCycle + 100){
        for(let enemy_row of enemies){
            enemy_row.forEach(function(element){
                element.show();
                element.move(direction);
            })
           
            lastCycle = time;
        }
    }else{
        for(let enemy_row of enemies){
            enemy_row.forEach(function(element){
               element.show(); 
            })
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
