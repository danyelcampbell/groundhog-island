window.export('render', function(game){
	//game.debug.text('x: ' + this.player.x + ' y: ' + this.player.y, 25, 25);

	var lineStart = 40;
	for(let i = 0; i < this.dialogLines.length; i++) {
		game.debug.text(this.dialogLines[i], 190, lineStart);
		lineStart += 23;
	}

	lineStart = 465;
	for(let i = 0; i < this.playerLines.length; i++) {
		game.debug.text(this.playerLines[i], 190, lineStart);
		lineStart += 23;
	}

	//game.debug.body(this.box1);
});