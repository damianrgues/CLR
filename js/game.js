//TODO: GAME FINISHED SCRREN

function Game(){
    // Set FPS for this game
    this.fps = 30;

    // create the player for this game
    this.player = new Player(PLAYER_SPEED/this.fps);

    // Score for the player // Change for lives
    //this.score = 0;
    this.timeRest = 30;

    // configure the player events
    $(document).on('keydown', this.player.keyboardEventDown.bind(this.player));
    $(document).on('keyup', this.player.keyboardEventUp.bind(this.player));

    // start with an empty array of enemies
    this.enemies = [];

    // configure enemy generation
    var that = this;
    setInterval(function() {
      that.createEnemy();
    }, 2 * 200);
    //Restar contador
    setInterval(function() {
      that.restTime();
    }, 1 * 1000);
}

//Print rest time
Game.prototype.restTime = function() {
  timeView.html(this.timeRest);
  this.timeRest--;
};

Game.prototype.checkCollision = function(player, enemy){
  if (player.player.collision(enemy.enemy).length >  0) {
    this.timeRest = this.timeRest - 2;
    return true;
  }
  return false;
};

/*
Game.prototype.checkScore = function() {
  if (this.score >= 200) {
    console.log("WIN WIN WIN");
    location.href ="win.html";
  }
};

*/

Game.prototype.checkTime = function() {
  if (this.timeRest <= 0) {
    console.log("LOOSE LOOSE LOOSE");
    location.href ="looser.html";
  }
};

Game.prototype.printScore = function() {
  scoreView.html(this.score);
};

Game.prototype.createEnemy = function() {
  var that = this;
  var pxSec = Math.random() * 250 + 100;
  var enemy = new Enemy(pxSec/ this.fps);
  this.enemies.push(enemy);
};

Game.prototype.move = function() {
  // move the enemies
  var that = this;
  this.enemies.forEach(function(enemy){
    if(that.checkCollision(that.player,enemy)){
      that.score += 10;
      enemy.delete();
    } else if(enemy.x > gameView.width()){
      enemy.delete();
    } else {
      enemy.move();
    }
  });

  // move the player
  this.player.move();
  // print the score
  //this.printScore();
  //this.checkScore();
  this.checkTime();
};
