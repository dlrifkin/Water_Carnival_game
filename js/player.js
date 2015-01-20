function Player(broom) {
  this.$broom = broom;
  // this.stream = new Stream();
  this.x = this.$broom.width() /2;
  this.y = this.$broom.height() - 50;
  this.width = 40;
  this.height = 40;
  this.speed = 3;
  this.name = 'player';
  this.dir = 'stationary';

  // this.sprite = 'url("http://www.nndb.com/people/540/000024468/r-kelly.jpg")';
   this.initDisplay()
}

Player.prototype.initDisplay = function() {
  this.$sprite = $("<div class='" + this.name + "'></div>");
  this.$broom.append(this.$sprite);
  this.updateDisplay();
}

Player.prototype.move = function () {
  old_x = this.x;
  old_y = this.y;
  switch (this.dir) {
    case 'right':
      this.x += this.speed;
      break;
    case 'left':
      this.x -= this.speed;
      break;
    case 'up':
      this.y -= this.speed;
      break;
    case 'down':
      this.y += this.speed;
      break;
  }
  if (! this.inbounds()) {
    this.x = old_x;
    this.y = old_y;
    this.outOfBounds = true;
  }
  this.updateDisplay();
}

Player.prototype.inbounds = function() {
  return (this.x > this.width / 2 && this.x < this.$broom.width() - this.width / 2 && this.y > this.height / 2 && this.y < this.$broom.height() - this.height / 2 )
}

Player.prototype.updateDisplay = function() {
  this.$sprite.css('top', this.y);
  this.$sprite.css('left', this.x);
}

Player.prototype.destroy = function() {
  this.$sprite.remove();
}

Player.prototype.setDirection = function(dir) {
  this.dir = dir;
}
