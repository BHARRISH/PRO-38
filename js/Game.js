class Game {
  constructor(){}

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
      form = new Form()
      form.display();
    }
    kid1 = createSprite(100,100);
    kid1.addImage(kid1Img);
    kid1.scale = 0.5;
    kid2 = createSprite(100,300);
    kid2.addImage(kid2Img);
    kid2.scale = 0.5;
    kid3 = createSprite(100,500);
    kid3.addImage(kid3Img);
    kid3.scale = 0.5;
    kid4 = createSprite(100,700);
    kid4.addImage(kid4Img);
    kid4.scale = 0.5;

    kids = [kid1,kid2,kid3,kid4];
  }

  play(){
    form.hide();
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
      background(rgb(198,135,103));
      image(backgroundImg,0,0,4000,700);
      //var display_position = 130;
      var index = 0;
      var x = -200;
      var y = 20;
      for(var plr in allPlayers){
        index += 1;
        y = y+150;
        x = allPlayers[plr].distance;
        kids[index-1].x = x;
        kids[index-1].y = y;
        //translate(kids[index-1].x,kids[index-1].y);
        if(index === player.index) {
          kids[index-1].shapeColor = "red";
          camera.position.x = kids[index-1].x;
          camera.position.y = displayHeight/2;
        }
      }
    }

    if(keyIsDown(RIGHT_ARROW) && player.index !== null){
      player.distance += 10;
      player.update();
    }
    if(player.distance > 4000) {
      gameState = 2;
    }
    drawSprites();
  }

  end(){
    console.log("Game Ended");
  }
}