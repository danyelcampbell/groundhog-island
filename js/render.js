window.export('render', function(game){
	var lineStart = 430;
	for(var i = 0; i < this.dialogLines.length; i++) {
		game.debug.text(this.dialogLines[i], 190, lineStart);
		lineStart += 25;
	}

	//game.debug.body(this.box1);
});