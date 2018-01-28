(function() {
	class PlaneInteraction{
		constructor(gameObjects, game) {
			this.gameObjects = gameObjects;
			this.game = game;
			this.visitedPlane = false;
			this.isLieOrTruthInput = false;
			this.isIDInput = false;
			this.isBomb = false;
		}

		update() {
			let self = this;
			this.game.physics.arcade.overlap(this.gameObjects.player, this.gameObjects.plane, function() {
				if(!self.visitedPlane) {
					self.visitedPlane = true;
					self.beginInteraction();
				}
			}, null, this.game);

			if(this.isBomb) {
				this.game.physics.arcade.collide(this.bombObj, this.gameObjects.platforms, function() {
					self.bombExplode();
				});
			}

			if(this.isLieOrTruthInput) {
				let input = this.gameObjects.input;
				if(input.one.isDown) {
					this.isLieOrTruthInput = false;
					this.lie();
				} else if(input.two.isDown) {
					this.isLieOrTruthInput = false;
					this.truth();
				}
			} else if(this.isIDInput) {
				let input = this.gameObjects.input;
				if(input.one.isDown) {
					this.isIDInput = false;
					this.idNum();
				} else if(input.two.isDown) {
					this.isIDInput = false;
					this.idNum();
				} else if(input.three.isDown) {
					this.isIDInput = false;
					this.idNum();
				}
			}
		}

		beginInteraction() {
			let self = this;
			setTimeout(function(){
				self.gameObjects.dialog.visible = true;
				self.gameObjects.dialogLines = ['[Radio garble]'];
				setTimeout(function(){
					self.gameObjects.dialogLines = ['[Radio] FLIGHT PAPA TANGO SIERRA 18 REPORT!'];
					setTimeout(function(){
						self.gameObjects.dialogLines.push('FLIGHT PAPA TANGO SIERRA 18,');
						self.gameObjects.dialogLines.push('THIS IS THE WARDEN AT SUPER SECRET PRISON.');
						setTimeout(function(){
							self.gameObjects.dialogLines.push('YOU WERE DUE IN AN HOUR AGO!');
							self.gameObjects.dialogLines.push('WHAT IS GOING ON?!');
							self.gameObjects.dialogLines.push('');
							setTimeout(function(){
								self.gameObjects.dialogLines.push('1) Lie and say everything is under control.');
								self.gameObjects.dialogLines.push('2) Tell the truth.');
								self.isLieOrTruthInput = true;
							}, 1000);
						}, 2000);
					}, 2000);
				}, 2000);
			}, 1000);
		}

		lie() {
			let self = this;
			self.gameObjects.dialogLines = ['[You clear your throat]', '[You] Yes Warden?'];
			setTimeout(function(){
				self.gameObjects.dialogLines.push('This is uhhhhh...');
				setTimeout(function(){
					self.gameObjects.dialogLines.push('... we ummm...');
					setTimeout(function(){
						self.gameObjects.dialogLines.push('We crash-landed on an island, but we still');
						self.gameObjects.dialogLines.push('have control of the prisoner. We need rescue.');
						setTimeout(function(){
							self.gameObjects.dialogLines = ["[Radio] I don't recognize your voice."];
							setTimeout(function(){
								self.gameObjects.dialogLines.push("What is your ID number?");
								setTimeout(function(){
									self.gameObjects.dialogLines.push('1) 986744767');
									self.gameObjects.dialogLines.push('2) 569809854');
									self.gameObjects.dialogLines.push('3) 097854477');
									self.isIDInput = true;
								}, 1000);
							}, 1000);
						}, 4000);
					}, 1000);
				}, 1000);
			}, 1000);
		}

		truth() {
			// get blown up
			let self = this;
			self.gameObjects.dialogLines = ["[You] The plane crashed, and I'm the only", 'survivor. All of the guards mysteriously', 'went ...missing.'];
			setTimeout(function(){
				self.gameObjects.dialogLines.push('[Radio] PRISONER! YOU WILL BE');
				setTimeout(function(){
					self.gameObjects.dialogLines.push('TERMINATED');
					setTimeout(function(){
						self.gameObjects.dialogLines.push('IMMEDIATELY.');
						setTimeout(function(){
							self.gameObjects.dialog.visible = false;
							self.gameObjects.dialogLines = [''];
							self.bomb();
						}, 3000);
					}, 3000);
				}, 1000);
			}, 3000);
		}

		idNum() {
			let self = this;
			self.gameObjects.dialogLines = ["[Radio] I can't find your ID in the system."];
			setTimeout(function(){
				self.gameObjects.dialogLines.push('We are transmiting your GPS coordinates to');
				self.gameObjects.dialogLines.push('the US Marshals.');
				self.gameObjects.dialogLines.push('Just stay there until they arrive.');
				setTimeout(function(){
					// conversation over, hide dialog
					self.gameObjects.dialog.visible = false;
					self.gameObjects.dialogLines = [''];
					// TODO: trigger marshals arriving soon
				}, 3000);
			}, 2000);
		}

		bomb() {
			this.isBomb = true;
			this.bombObj = this.game.add.sprite(this.gameObjects.player.x, this.gameObjects.player.y - 500, 'bomb');
			this.bombObj.anchor.setTo(0.5, 0.5);
			this.bombObj.animations.add('falling', [0]);
			this.bombObj.animations.add('explosion', [1]);
			this.bombObj.scale.x = 3;
			this.bombObj.scale.y = 3;
			this.bombObj.animations.play('falling');
			this.game.physics.arcade.enable(this.bombObj);
			this.bombObj.body.gravity.y = 500;
		}

		bombExplode() {
			this.isBomb = false;
			this.bombObj.body.gravity.y = 0;
			this.bombObj.scale.x = 20;
			this.bombObj.scale.y = 20;
			this.bombObj.animations.play('explosion');
			let self = this;
			setTimeout(function() {
				// game over
				// TODO: Add game over screen
				self.game.state.start('MainGame');
			}, 2000);
		}
	}
	window.export('PlaneInteraction', PlaneInteraction);
})();