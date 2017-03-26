var trump;
var scl;

var trumpImg;
var brickImg;
var enemyImg;
var bgImg;

var bricks;
var enemies;

var SPACE = 32;
var direction = 1;
var shift = false;
var dir = true;
var shifted = false;

var lastCycle = 0;

var juanAnimation;
var trumpSprite;

function preload() {
    juanAnimation = loadAnimation("assets/juan-1.png", "assets/juan-2.png");
    juanAnimation.playing = false;


    trumpImg = loadImage("assets/trump.png");
    brickImg = loadImage("assets/brick.png");
    enemyImg = loadImage("assets/juan.png");

    bgImg = loadImage("assets/bg.jpg");

    enemies = new Group();
    bricks = new Group();
}

function setup() {
    createCanvas(508, 630);
    scl = 0.35;

    trump = new Trump(scl, trumpImg);
    trump.init();

    //Create enemies
    var enemy;

    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 11; j++) {
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

    enemyShoot();

    for (let brick of bricks) {
        /* jshint loopfunc: true */
        if (brick.sprite.position.y < 0) {
            bricks = bricks.filter(item => item !== brick);
        }

        for (let enemy of enemies) {
            brick.sprite.overlap(enemy.sprite, removeEnemy);
        }
    }

    var time = new Date().getTime();
    if (time >= lastCycle + 1000) {

        enemies.forEach(function (element) {
            element.move(direction);
        });

        lastCycle = time;


        enemies.forEach(function (element) {
            if (element.onRight()) {
                dir = true;
                direction *= -1;
                shift = true;
            } else if (element.onLeft()) {
                dir = false;
                direction *= -1;
                shift = true;
            }
        });


        if (shift) {
            enemies.forEach(function (element) {
                element.shiftDown(dir);
            });
            shift = false;
        }
    }


    refreshGroups();
    drawSprites();

}

function removeEnemy(brick, enemy) {
    enemy.remove();
    brick.remove();
}

function enemyShoot() {
//    enemies.filter()
}

function refreshGroups() {
    enemies = enemies.filter(item => item.sprite.removed !== true);
    bricks = bricks.filter(item => item.sprite.removed !== true);
}

function keyReleased() {
    switch (keyCode) {
        case LEFT_ARROW:
            trump.dir(0);
            break;
        case RIGHT_ARROW:
            trump.dir(0);
            break;
    }
}

function keyPressed() {

    switch (keyCode) {

        case LEFT_ARROW:
            trump.dir(-1);
            break;
        case RIGHT_ARROW:
            trump.dir(1);
            break;
        case SPACE:
            if (bricks.length < 3) {
                var brick = new Bullet(trump.sprite.position.x, trump.sprite.position.y - (trump.height / 2) - (brickImg.height * scl / 2), scl, brickImg, 270);
                brick.init();
                bricks.push(brick);
            }
    }
}