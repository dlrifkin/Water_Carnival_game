function Stream(broom) {
  this.$broom = broom;
  this.x = this.$broom.width() /2;
  this.y = this.$broom.height() - 50;
  this.width = 5;
  this.height = 5;
  this.speed = 3;
  this.name = 'stream'

  this.initDisplay()
}

['initDisplay', 'updateDisplay', 'move', 'inbounds', 'destroy'].forEach(function (func) {
Stream.prototype[func] = Player.prototype[func];
});

// moveTo function(player x, player y)
// decay function - destroy when hits destination
// collision to keep track of score
// refresh - use space bar to fire

