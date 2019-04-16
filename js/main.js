$(document).ready(function() {
  var wave = new Wave();

  var game = new Game();
  setInterval(function() {
    game.move();
  }, 1000/game.fps);
  window.game = game;
});
