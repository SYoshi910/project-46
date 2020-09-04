var player, camx, health;
var camSpeed;
var test;
var ground, isJumping, isGrounded, isMoving;
var enemies = [];
var platforms = [];
var score = 0;
var gameState = "start";
var second = 166;
var timer = 30;
var defaultTime = 30;
var shurikens = [];
var toggle = false;
var shuriken;
var damageCount, healthbar;
var enemyDed, platWent;
var musicCount = 0;
// Existing code unchanged.



// One-liner to resume playback when user interacted with the page
function preload(){
  bgrnd = loadImage("Assets/DojoBackground.png");
  plank1 = loadImage("Assets/plank1.jpg");
  plank2 = loadImage("Assets/plank2.png");
  plank3 = loadImage("Assets/plank3.png");
  plank4 = loadImage("Assets/plank4.png");
  plank5 = loadImage("Assets/plank5.png");
  plank6 = loadImage("Assets/plank6.png");
  plank8 = loadImage("Assets/plank8.png");
  plank10 = loadImage("Assets/plank10.png");
  plank12 = loadImage("Assets/plank12.png");
  plank20 = loadImage("Assets/plank20.png");
  playerIdle = loadImage("Assets/playerIdle.png");
  player1 = loadImage("Assets/player1.png");
  player2 = loadImage("Assets/player2.png");
  enemyIdle = loadImage("Assets/enemyIdle.png");
  enemy1 = loadImage("Assets/enemy1.png");
  enemy2 = loadImage("Assets/enemy2.png");
  enemyIdle2 = loadImage("Assets/enemyIdle2.png");
  enemy12 = loadImage("Assets/enemy12.png");
  enemy22 = loadImage("Assets/enemy22.png");
  playerIdle2 = loadImage("Assets/playerIdle2.png");
  player12 = loadImage("Assets/player12.png");
  player22 = loadImage("Assets/player22.png");
  shurikenz = loadImage("Assets/shuriken.png");
  enemyAnimation = loadAnimation(enemyIdle,enemyIdle,enemy1,enemy1,enemy2,enemy2,enemy1,enemy1);
  enemyAnimation2 = loadAnimation(enemyIdle2,enemyIdle2,enemy12,enemy12,enemy22,enemy22,enemy12,enemy12);
  intro = loadSound("Assets/ninjaIntro.wav");
  main = loadSound("Assets/ninjaMain.wav");
}

function setup() {
  
  createCanvas(1600,800);
  isMoving = true;
  back8 = createSprite(-800,400,1600,800);
  back8.addImage(bgrnd);
  back8.scale = 1.5;

  back = createSprite(800,400,1600,800);
  back.addImage(bgrnd);
  back.scale = 1.5;

  back2 = createSprite(2400,400,1600,800);
  back2.addImage(bgrnd);
  back2.scale = 1.5;

  back3 = createSprite(4000,400,1600,800);
  back3.addImage(bgrnd);
  back3.scale = 1.5;

  back4 = createSprite(5600,400,1600,800);
  back4.addImage(bgrnd);
  back4.scale = 1.5;

  back5 = createSprite(7200,400,1600,800);
  back5.addImage(bgrnd);
  back5.scale = 1.5;

  back6 = createSprite(8800,400,1600,800);
  back6.addImage(bgrnd);
  back6.scale = 1.5;

  back7 = createSprite(10400,400,1600,800);
  back7.addImage(bgrnd);
  back7.scale = 1.5;

  player = createSprite(500,700,100,100);
  player.addAnimation("asd,",playerIdle);
  player.scale = 1;
  wallL = createSprite(0,400,20,800);
  wallL.shapeColor = "#291b0a";

  wallR = createSprite(10000,400,20,800);
  wallR.shapeColor = "#291b0a";
  player.shapeColor = "lime";
  playSpeed = 0;
  camSpeed = 0;
  health = 300;
  enemyDed = 0;
  platWent = 0;
  //healthbar = createSprite(800,70,health*2,100);
  ground = createSprite(camera.position.x+ 800,800,1600,20);
  ground.shapeColor = "#3f2c1a";
  isJumping = true;
  isGrounded = true;
  platform = new Platform(1800,575,8);
  platforms.push(platform);
  platform.plat.addImage(plank8);

  platform2 = new Platform(2500,430,5);
  platforms.push(platform2);
  platform2.plat.addImage(plank5);

  platform3 = new Platform(3400,500,12);
  platforms.push(platform3);
  platform3.plat.addImage(plank12);

  platform4 = new Platform(4000,300,4);
  platforms.push(platform4);
  platform4.plat.addImage(plank4);

  platform5 = new Platform(5000,400,6);
  platforms.push(platform5);
  platform5.plat.addImage(plank6);
  
  platform6 = new Platform(6200,600,20);
  platforms.push(platform6);
  platform6.plat.addImage(plank20);

  platform7 = new Platform(7200,400,3);
  platforms.push(platform7);
  platform7.plat.addImage(plank3);

  platform8 = new Platform(7700,300,2);
  platforms.push(platform8);
  platform8.plat.addImage(plank2);

  platform9 = new Platform(8300,400,1);
  platforms.push(platform9);
  platform9.plat.addImage(plank1);

  platform10 = new Platform(9000,815,10);
  platforms.push(platform10);
  platform10.plat.addImage(plank10);

  enemy = new Enemy(1900,400);
  enemies.push(enemy);

  

  enemy2 = new Enemy(2550,500);
  enemies.push(enemy2);

  

  enemy3 = new Enemy(3550,420);
  enemies.push(enemy3);

  

  enemy4 = new Enemy(5050,300);
  enemies.push(enemy4);


  enemy5 = new Enemy(6000,400);
  enemies.push(enemy5);

  enemy6 = new Enemy(6600,400);
  enemies.push(enemy6);

  

  enemy7 = new Enemy(8700,750);
  enemies.push(enemy7);
  
  
}

function draw() {
  background(20,20,20); 
  camera.position.x += camSpeed;
  //healthbar.width = health*2;
  if(gameState == "start"){
    if(keyDown("space")){
      if(keyDown("space")){
        window.onload = function() {
          var context = new AudioContext();
          
        
        context.resume();
        }
        intro.play();
      }
      gameState = "play";
    }
    
    
  }
  if(gameState != "start"){
    if(musicCount < 5397){
      musicCount += 1;
    }
    if(musicCount == 5297){
      main.loop();
    }
  }
  if(gameState == "play"){
    
    
    if(frameCount % 166 == 0 && timer >= 0){
      timer -= 1;
    }
    if(timer == 0){
      gameState = "end";
    }
    if(keyDown("d") && isMoving == true){
      player.addAnimation("asd,",playerIdle,playerIdle,player1,player1,player2,player2,player1,player1);
      isMoving = false;
    }

    if(keyDown("a") && isMoving == true){
      player.addAnimation("asd,",playerIdle2,playerIdle2,player12,player12,player22,player22,player12,player12);
      isMoving = false;
    }
    if(keyWentUp("d")){
      isMoving = true;
      player.addImage("asd,",playerIdle);
    }

    if(keyWentUp("a")){
      isMoving = true;
      player.addImage("asd,",playerIdle2);
    }
   
    if(keyDown("d")){
      player.velocityX = 5;

     // camSpeed = 5;
    }
    if(keyWentUp("d")){
      player.velocityX = 0;
      camSpeed = 0;
    }
    if(keyDown("d") && player.x >= camera.position.x + 250){
      //player.velocityX = 5;
      camSpeed = 5;
    }
    
    ground.x = camera.position.x;
    if(keyDown("a") && player.x >= 101){
      player.velocityX = -5;
      //camSpeed = -5;
    }
    if((keyDown("a") && player.x <= camera.position.x - 500) && camera.position.x >= 801){
      player.velocityX = -5;
      camSpeed = -5;
    }
  //  console.log(camera.position.x);
    if(keyWentUp("a")){
      player.velocityX = 0;
      camSpeed = 0;
    }
    if(mouseDown() && toggle == false && shuriken == undefined){
      shuriken = new Shuriken();
      toggle = true;
    }
    if(mouseWentUp()){
      toggle = false;
    }
    if(keyDown("SPACE") && !isJumping){ 
      player.velocityY = -8;
      isJumping = true;
      //console.log("jumped");
      isGrounded = false;
    }
    if(isJumping){
      player.velocityY += 0.12;
    }
    if(player.y >= 738){
      isJumping = false;
      isGrounded = true;
    }
    enemies.forEach(element =>{
      if(element.enemy.y <= 738){
        element.enemy.velocityY += 0.12;
      }
      element.enemy.collide(ground);
      for(var i = 0; i < platforms.length; i++){
        element.enemy.collide(platforms[i].plat);
      }
      
      if(camera.position.x >= element.enemy.x - 849){
        element.active(true);
      }
      if(shuriken != null){
        if(element.enemy.isTouching(shuriken.ken)){
          element.health -= 50;
          shuriken.ken.destroy();
          shuriken = null;
        }
      }
     /* if(element.enemy.isTouching(player)){
        damageCount += 1;
      }
      else{
        damageCount = 0;
      }
      if(damageCount >= 166){
        health -= 1;
      }*/
      if(element.health == 0){
        element.enemy.destroy();
        element.health = 1;
        element.bar.destroy();
        element = null;
        score += 1;
        enemyDed += 1;
      }
    })
    if(shuriken != undefined){
      shuriken.display();
      if(shuriken.ken.x > camera.position.x + 1000 || shuriken.ken.x < camera.position.x - 1000 || shuriken.ken.y > height || shuriken.ken.y < 0){
        shuriken.ken.destroy();
        shuriken = null;
      }
      
    }
    /*platforms.forEach(element =>{
      player.collide(element);
      if(player.y == element.y - 75 && player.x + 50 >= element.x - element.width/2 && player.x - 50 <= element.x + element.width/2 ){
        isJumping = false;
        console.log(player.x);
        if(player.x + 50 <= element.x - element.width/2 || player.x - 50 >= element.x + element.width/2){
          isJumping = true;
        }
      }
    })*/
    for(var element in platforms){
      player.collide(platforms[element].plat);
    
      if(player.y == platforms[element].plat.y - 76 && player.x + 50 >= platforms[element].plat.x - platforms[element].plat.width/2 && player.x - 50 <= platforms[element].plat.x + platforms[element].plat.width/2 ){
        isJumping = false;
        platforms[element].plat2.shapeColor = "yellow";
        //console.log(health);
        if(player.x + 50 <= platforms[element].plat.x - platforms[element].plat.width/2 || player.x - 50 >= platforms[element].plat.x + platforms[element].plat.width/2){
          isJumping = true;
        }
      }
      if(platforms[element].plat2.shapeColor == "yellow" && platforms[element].score == true){
        score += 1;
        platWent += 1;
        platforms[element].score = false;
      }
      //console.log(platforms[element].y);
    }
   // console.log(player.y);
    if(score == 16){
      gameState = "win";
    }
  }
  if(gameState == "win"){
    player.velocityX = 0;
    player.velocityY = 0;
    textSize(40);
    fill("lime");
    if(defaultTime >= 16){
      text("You Won! Press Space to Play Again at a Harder Difficulty", camera.position.x - 520,500);
      camSpeed = 0;
      if(keyWentUp("SPACE")){
        score = 0;
        camera.position.x = 800;
        player.x = 300;
        player.y = 700;
        enemies.forEach(i =>{
          i.enemy.destroy();
          i.bar.destroy();
          i = null;
        })
        enemies = new Array;
        enemy = new Enemy(1900,400);
        enemies.push(enemy);

        enemy2 = new Enemy(2550,500);
        enemies.push(enemy2);

        enemy3 = new Enemy(3550,420);
        enemies.push(enemy3);

        enemy4 = new Enemy(5050,300);
        enemies.push(enemy4);

        enemy5 = new Enemy(6000,400);
        enemies.push(enemy5);

        enemy6 = new Enemy(6600,400);
        enemies.push(enemy6);

        enemy7 = new Enemy(8700,750);
        enemies.push(enemy7);
        platforms.forEach(i =>{
          i.plat2.shapeColor = "blue";
          i.score = true;
        })
        platWent = 0;
        enemyDed = 0;
        isJumping = true;
        isGrounded = false;
        gameState = "play";
        defaultTime -= 5
        timer = defaultTime;
        second = 166;
      }
    }
    
    else{
      text("You Are a True Ninja Warrior! Press Space Again to Play in MASTER MODE", camera.position.x - 650,500);
      camSpeed = 0;
      if(keyWentUp("SPACE")){
        score = 0;
        camera.position.x = 800;
        player.x = 300;
        player.y = 700;
        enemies.forEach(i =>{
          i.enemy.destroy();
          i.bar.destroy();
          i = null;
        })
        enemies = new Array;
        enemy = new Enemy(1900,400);
        enemies.push(enemy);

        enemy2 = new Enemy(2550,500);
        enemies.push(enemy2);

        enemy3 = new Enemy(3550,420);
        enemies.push(enemy3);

        enemy4 = new Enemy(5050,300);
        enemies.push(enemy4);

        enemy5 = new Enemy(6000,400);
        enemies.push(enemy5);

        enemy6 = new Enemy(6600,400);
        enemies.push(enemy6);

        enemy7 = new Enemy(8700,750);
        enemies.push(enemy7);
        platforms.forEach(i =>{
          i.plat2.shapeColor = "blue";
          i.score = true;
        })
        platWent = 0;
        enemyDed = 0;
        isJumping = true;
        isGrounded = false;
        gameState = "play";
        defaultTime -= 5
        timer = defaultTime;
        second = 166;
      }
    }
  }
  else if(gameState == "end"){
    player.velocityX = 0;
    player.velocityY = 0;
    textSize(40);
    fill("red");
    text("Too bad, you Lost! Press Space to Try Again", camera.position.x - 400,500);
    camSpeed = 0;
    if(keyWentUp("SPACE")){
      score = 0;
      camera.position.x = 800;
      player.x = 300;
      player.y = 700;
      enemies.forEach(i =>{
        i.enemy.destroy();
        i.bar.destroy();
        i = null;
      })
      enemies = [];
      enemy = new Enemy(1900,400);
      enemies.push(enemy);

      enemy2 = new Enemy(2550,500);
      enemies.push(enemy2);

      enemy3 = new Enemy(3550,420);
      enemies.push(enemy3);

      enemy4 = new Enemy(5050,300);
      enemies.push(enemy4);

      enemy5 = new Enemy(6000,400);
      enemies.push(enemy5);

      enemy6 = new Enemy(6600,400);
      enemies.push(enemy6);

      enemy7 = new Enemy(8700,750);
      enemies.push(enemy7);
      platforms.forEach(i =>{
        i.plat2.shapeColor = "blue";
        i.score = true;
      })
      platWent = 0;
      enemyDed = 0;
      isJumping = true;
      isGrounded = false;
      gameState = "play";
      timer = defaultTime;
      second = 166;
     // console.log("hola");
    }
  }
 // console.log(score);
  player.collide(ground);
  player.collide(wallL);
  player.collide(wallR);
  console.log(musicCount);
  
  drawSprites();
  camera.off();
    fill("white");
    textSize(30);
    text("Enemies Defeated: " + enemyDed + "/6",1220,50);
    text("Platforms Reached: " + platWent + "/10", 1220, 100);
    textSize(40);
    if(timer <= 10){
      fill("red");
    }
    text(timer, 40, 50);
    camera.on();
  if(gameState == "win" && defaultTime >= 16){
    textSize(40);
    fill("lime");
    text("You Won! Press Space to Play Again at a Harder Difficulty", camera.position.x - 520,500);
  }
  else if(gameState == "win" && defaultTime < 16){
    textSize(40);
    fill("lime");
    text("You Are a True Ninja Warrior! Press Space Again to Play in MASTER MODE", camera.position.x - 650,500);
  }
  else if(gameState == "end"){
    textSize(40);
    fill("red");
    text("Too bad, you Lost! Press Space to Try Again", camera.position.x - 400,500);
  }
  else if(gameState == 'start'){
    text("PRESS 'SPACE' TO START", 600,400);
  }
}
function mousePressed(){

}
