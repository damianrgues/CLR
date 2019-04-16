function Keyboard() {
  this.keyUp = 38;
  this.keyDown = 40;
  this.keyLeft = 37;
  this.keyRight = 39;
}

Keyboard.prototype.isKeyUp = function(e) {
  return this.keyUp == e.keyCode;
};

Keyboard.prototype.isKeyDown = function(e) {
  return this.keyDown == e.keyCode;
};

Keyboard.prototype.isKeyLeft = function(e) {
  return this.keyLeft == e.keyCode;
};

Keyboard.prototype.isKeyRight = function(e) {
  return this.keyRight == e.keyCode;
};
