function Target(broom) {
  this.$broom = broom;
  this.x = this.$broom.width() /2;
  this.y = this.$broom.height() /2;
  this.width = 40;
  this.height = 40;
  this.name = 'target';
  this.initDisplay()
}

['initDisplay', 'updateDisplay'].forEach(function (func) {
Target.prototype[func] = Player.prototype[func];
});

