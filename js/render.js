window.export('render', function(){
	'use strict';
	function renderFunction(gameObjects, game) {
		//game.debug.text('x: ' + gameObjects.player.x + ' y: ' + gameObjects.player.y, 25, 25);

		var lineStart = 40;
		for(let i = 0; i < gameObjects.dialogLines.length; i++) {
			game.debug.text(gameObjects.dialogLines[i], 190, lineStart);
			lineStart += 23;
		}

		lineStart = 465;
		for(let i = 0; i < gameObjects.playerLines.length; i++) {
			game.debug.text(gameObjects.playerLines[i], 190, lineStart);
			lineStart += 23;
		}

		//game.debug.body(gameObjects.box1);
	}

	return renderFunction;
});