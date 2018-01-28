window.export('render', function(game){
	game.debug.text('x: ' + this.player.x + ' y: ' + this.player.y, 25, 25);

	var lineStart = 426;
	for(var i = 0; i < this.dialogLines.length; i++) {
		game.debug.text(this.dialogLines[i], 190, lineStart);
		lineStart += 23;
	}

	//game.debug.body(this.box1);
});