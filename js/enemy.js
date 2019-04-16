var Enemy = function(speed) {
  this.speed = speed;
  this.x =  -180;
  this.y = Math.random() * (gameView.height() / 2) + (gameView.height() / 3) - 150;
  this.renderEnemy();
};

Enemy.prototype.move = function(){
  this.x += this.speed;
  this.enemy.css({
    top: this.y,
    left: this.x
  });
};

Enemy.prototype.renderEnemy = function(){
  console.log("Entro en Create Enemy yeahhh");
  this.enemy = $('<div>')
                      .addClass('enemy')
                      .addClass(this.getRandomClassForEnemy())
                      .css({
                        top: this.y,
                        left: this.x
                      });
  gameView.append(this.enemy);
};

Enemy.prototype.getRandomClassForEnemy = function(){
  var classes = ["prosti", "tourists", "mimos", "beachBoy"];
  return classes[Math.floor(Math.random()*classes.length)];
};

Enemy.prototype.delete = function(){
  this.enemy.remove();
};
