function Game() {
  this.$broom = $('#broom');
  this.player1 = new Player(this.$broom);
  this.startTime = new Date();
  this.stream = [];
  this.target = new Target(this.$broom);
  this.score = this.player1.score
}

Game.prototype.loop = function() {
  this.player1.move();
  // this.target.move();

  this.stream = _(this.stream).reject(function(drop) { return drop.isLanded });
  this.stream.forEach(function (drops) {
    drops.move();
    // console.log(drops);
  });
  player1 = this.player1;
  this.updateTimer();
  // this.updateScore()
}

Game.prototype.updateTimer = function() {
  $('#timer').html((Date.now() - this.startTime) / 1000);
}

Game.prototype.startStream = function() {

  this.stream.push(new Drops(this.player1, this.target))

}


// Also need Game.updateScore




$(document).ready(function() {
  game = new Game();
  setInterval(function() {game.loop(); }, 20);

  ['left', 'right', 'up', 'down'].forEach(function(direction) {
    Mousetrap.bind(direction, function() {
      game.player1.setDirection(direction);
    }, 'keydown');
    Mousetrap.bind(direction, function() {
      game.player1.setDirection('static');
    }, 'keyup');
  });

  Mousetrap.bind('space', function() {
    game.startStream();
  })

})
