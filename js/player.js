var Player = function(speed){
  this.height = 0;
  this.x = 600;
  this.y = 190;
  this.dirX = 0;
  this.dirY = 0;
  this.speed = speed;
  this.health = PLAYER_HEALTH;
  this.keyboard = new Keyboard();
  this.renderPlayer();
};


Player.prototype.move = function() {
  this.x += this.speed * this.dirX;
  this.y += this.speed * this.dirY;
  this.player.css({top: this.y, left: this.x});
};

Player.prototype.renderPlayer = function(){
    this.player =  $('<div>').addClass('player').css({top: this.y, left: this.x});
    this.player.append('<img id="surfer" src="img/PERSON.png">');

    gameView.append(this.player);
};

Player.prototype.keyboardEventDown = function(e){
  if (this.keyboard.isKeyUp(e)) {
    this.dirY = -1;
  }
  if (this.keyboard.isKeyDown(e)) {
    this.dirY = 1;
  }
  if (this.keyboard.isKeyLeft(e)) {
    this.dirX = -1;
  }
  if (this.keyboard.isKeyRight(e)) {
    this.dirX = 1;
  }
};

Player.prototype.keyboardEventUp = function(e){
  if (this.keyboard.isKeyUp(e)) {
    this.dirY = 0;
  }
  if (this.keyboard.isKeyDown(e)) {
    this.dirY = 0;
  }
  if (this.keyboard.isKeyLeft(e)) {
    this.dirX = 0;
  }
  if (this.keyboard.isKeyRight(e)) {
    this.dirX = 0;
  }
};
