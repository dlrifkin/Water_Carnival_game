function Drops(player, target) {
  this.$player = player;
  this.$broom = player.$broom;
  this.aim_x = this.$player.x;
  this.aim_y = this.$player.y;
  this.x = this.$player.$broom.width() /2;
  this.y = this.$player.$broom.height() - 50;
  this.isLanded = false;
  this.width = 5;
  this.height = 5;
  this.speed = 3;
  this.name = 'drops';
  this.target = target;
  this.initDisplay()
}

['initDisplay', 'updateDisplay', 'inbounds', 'destroy'].forEach(function (func) {
Drops.prototype[func] = Player.prototype[func];
});

Drops.prototype.move = function() {
  var easingAmount = 0.15
  var xDistance = this.aim_x - this.x;
  var yDistance = this.aim_y - this.y;
  var distance = Math.sqrt(xDistance * xDistance + yDistance * yDistance);
  if (distance > 1) {
    this.x += xDistance * easingAmount;
    this.y += yDistance * easingAmount;
  }else{
    this.score();
    this.destroy();
    this.isLanded = true
    // console.log(this.score());
  }
  this.updateDisplay();
}

Drops.prototype.score = function() {
  var left = this.target.x;
  var right = this.target.x + this.target.width;
  var top = this.target.y;
  var bottom = this.target.y + this.target.height;

  if  ( this.aim_x > left && this.aim_x < right && this.aim_y > top && this.aim_y < bottom )  {
      console.log('score one for the rifkin');
      this.$player.score += 5;

  }

}
// moveTo function(player x, player y)
// decay function - destroy when hits destination
// collision to keep track of score
// refresh - use space bar to fire

