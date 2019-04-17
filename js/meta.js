var Meta = function(speed) {
    this.speed = speed;
    this.x =  -180;
    this.y = Math.random() * (gameView.height() / 2) + (gameView.height() / 3) - 150;
    this.renderMeta();
  };
  
  Meta.prototype.move = function(){
    this.x += this.speed;
    this.meta.css({
      top: this.y,
      left: this.x
    });
  };
  
  Meta.prototype.renderMeta = function(){
    console.log("Entro en Create Meta yeahhh");
    this.meta = $('<div>')
                        .addClass('meta')
                        .addClass(this.getRandomClassForMeta())
                        .css({
                          top: this.y,
                          left: this.x
                        });
    gameView.append(this.meta);
  };
  
  Meta.prototype.getRandomClassForEnemy = function(){
    var classes = ["prosti", "tourists", "mimos", "beachBoy"];
    return classes[Math.floor(Math.random()*classes.length)];
  };
  
  Meta.prototype.delete = function(){
    this.meta.remove();
  };
  