(function() {
	class PlaneInteraction{
		constructor(gameObjects, game) {
			this.gameObjects = gameObjects;
			this.game = game;
			self.visitedPlane = false;
		}

		update() {
			let self = this;
			this.game.physics.arcade.overlap(this.gameObjects.player, this.gameObjects.plane, function() {
				if(!self.visitedPlane) {
					self.visitedPlane = true;
					self.interact();
				}
			}, null, this.game);
		}

		


		interact() {
			let self = this;
			setTimeout(function(){
				self.gameObjects.dialog.visible = true;
				self.gameObjects.dialogLines = ["[Radio garble]"];
				setTimeout(function(){
					self.gameObjects.dialogLines = ["FLIGHT PAPA TANGO SIERRA 18 REPORT!"];
					setTimeout(function(){
						self.gameObjects.dialogLines.push("FLIGHT PAPA TANGO SIERRA 18,");
						self.gameObjects.dialogLines.push("THIS IS THE WARDEN AT SUPER SECRET PRISON.");
						setTimeout(function(){
							self.gameObjects.dialogLines.push("YOU WERE DUE IN AN HOUR AGO!");
							self.gameObjects.dialogLines.push("WHAT IS GOING ON?!");
						}, 2000);
					}, 2000);
				}, 2000);
			}, 1000);
		}
	}
	window.export("PlaneInteraction", PlaneInteraction);
	setTimeout(function(){

	}, 1000);
})();