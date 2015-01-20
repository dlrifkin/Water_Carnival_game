function Target(broom) {
  this.$broom = broom;
  this.x = this.$broom.width() /2;
  this.y = this.$broom.height() /1.4  ;
  this.width = 20;
  this.height = 20;
  this.name = 'target';
  this.initDisplay()
  // this.sprite = 'https://c1.staticflickr.com/5/4029/4280587485_aba01794df_z.jpg?zz=1'
}

['initDisplay', 'updateDisplay'].forEach(function (func) {
Target.prototype[func] = Player.prototype[func];
});

