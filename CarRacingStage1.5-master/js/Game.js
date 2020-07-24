class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
     // kissclipart-plant-stem-clipart-san-pedro-cactus-triangle-cactu-b291e3d5c19e7b46.png
      form = new Form()
      form.display();
    }

    car1 = createSprite(100,200);
    car2 = createSprite(300,200);
    car3 = createSprite(500,200);
    car4 = createSprite(700,200);
   
    cars = [car1, car2, car3, car4];
    car1.addImage("car1",car1img)
    car2.addImage("car2",car2img)
    car3.addImage("car3",car3img)
    car4.addImage("car4",car4img)
   // obstacle= createSprite(randomx,randomy)
    //obstacle.addImage("obstacleimg",obimg)
    
  }

  play(){
    //background(groundimg)
    form.hide();
    //image(trackimg,47,-displayHeight*4,displayWidth+100,displayHeight*5)
    Player.getPlayerInfo();
    randomx=random(50,displayWidth)
    randomy=random(displayHeight/2,displayHeight)
    
    
    if(allPlayers !== undefined){
      //var display_position = 100;
      image(trackimg,0,-displayHeight*4,displayWidth,displayHeight*6)
      if(frameCount%50===0){
        obstacle= new Obstacle(randomx,randomy,1,1)
        obstacle.display()
      }
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 230;
      var y;
 
     
      //console.log(testvar)

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = x + 260;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;

        if (index === player.index){
          cars[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y
          textSize(20);
          fill ("red")
          text(player.name,x+25,y+40)
          fill (128)
          ellipse(x,y+20,50,50)
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }
    
    
    //if(keyIsDown(DOWN_ARROW) && player.index !== null){
    //  player.distance -=10
    //  player.update();
    //}
    if(player.distance>5195){
     gameState=2
    }//
    console.log(player.distance)
     

    drawSprites();
  }
 gameover(){
   window.prompt("You Won!")
    game.update(2)
  }
}
