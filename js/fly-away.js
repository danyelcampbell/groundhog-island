(function() {
	class FlyAway{
		constructor(gameObjects, game) {
			this.gameObjects = gameObjects;
			this.game = game;
			this.watchForOverlap = false;
			this.inputEnabled = false;
		}

		update() {
			let self = this;
			if(this.watchForOverlap) {
				this.game.physics.arcade.overlap(this.gameObjects.player, this.plane, function(){
					self.watchForOverlap = false;
					self.flyPlane();
				});
			}
			if(this.gameObjects.planeMode && this.inputEnabled) {
				this.processInput();
			}
		}

		enable() {
			// Spawn the float plane
			this.plane = this.game.add.sprite(2300, 860, 'waterplane');
			this.plane.anchor.setTo(0.5, 0.5);
			this.plane.scale.setTo(2, 2);
			this.game.physics.arcade.enable(this.plane);

			this.watchForOverlap = true;
		}

		flyPlane() {
			this.inputEnabled = true;
			this.gameObjects.player.visible = false;
			this.plane.body.velocity.x = 5;
			this.plane.body.velocity.y = 1;
			this.gameObjects.planeMode = true;
			this.gameObjects.player = this.plane; // hack to make the camera follow the plane

			let self = this;
			setTimeout(function(){
				self.gameObjects.dialog.visible = true;
				self.gameObjects.dialogLines = ['[You] Wait...', "I don't know how to fly a plane!"];
				setTimeout(function(){
					self.inputEnabled = false;
					self.plane.body.gravity.y = 200;
					setTimeout(function(){
						self.gameObjects.dialog.visible = false;
						self.gameObjects.dialogLines = [''];
						setTimeout(function(){
							window.location.reload();
							//self.game.state.start('MainGame');
						}, 2000);
					}, 2000);
				}, 1000);
			}, 4000);
		}

		processInput() {
			let input = this.gameObjects.input;
			if(input.left.isDown) {
				this.plane.body.velocity.x -= 5;
			}
			if(input.right.isDown) {
				this.plane.body.velocity.x += 5;
			}
			if(input.up.isDown) {
				this.plane.body.velocity.y -= 5;
			}
			if(input.down.isDown) {
				this.plane.body.velocity.y += 5;
			}
		}
	}
	window.export('FlyAway', FlyAway);
})();