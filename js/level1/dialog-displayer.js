window.export('DialogDisplayer', function() {
	'use strict';

	class DialogDisplayer {
		constructor(gameObjects, game) {
			this.gameObjects = gameObjects;
			this.game = game;
		}

		render() {
			let lineStart = 40;
			for(let i = 0; i < this.gameObjects.dialogLines.length; i++) {
				this.game.debug.text(this.gameObjects.dialogLines[i], 190, lineStart);
				lineStart += 23;
			}

			lineStart = 465;
			for(let i = 0; i < this.gameObjects.playerLines.length; i++) {
				this.game.debug.text(this.gameObjects.playerLines[i], 190, lineStart);
				lineStart += 23;
			}
		}
	}

	return DialogDisplayer;
});