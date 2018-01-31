window.export("update", function(){
	'use strict';
	function updateFunction(gameObjects, game) {
		if(!gameObjects.planeMode) {
			game.physics.arcade.collide(gameObjects.player, gameObjects.platforms, function(){
				self.isOnGround = true;
			});

			if(gameObjects.input.up.isDown) { // check for the up key being pressed
				if(!gameObjects.isJumping && gameObjects.isOnGround) {
					gameObjects.isOnGround = false;
					gameObjects.player.body.velocity.y -= 300; // make the player go up (up is smaller y values)
				}
				gameObjects.isJumping = true;
			}

			if ((gameObjects.player.x >= 2300) && (gameObjects.player.x <= 2400)) // player goes to far out to sea
			{
				
				
				// make hungry shark animation show.
				gameObjects.shark.visible = false;
				var something = gameObjects.hungryshark.visible ? gameObjects.hungryshark.visible = true : gameObjects.hungryshark.visible = true ; 
				// player die
				gameObjects.player.visible = false;
				//deathchecker(); dead? restart
				if(gameObjects.deathCheck){ 
					gameObjects.deathCheck = false;
					setTimeout(function() {
						// game over
						// TODO: Add game over screen
						game.state.start("Level1");
						//window.location.reload();
					}, 5000);
				}
					
			}

			if(gameObjects.input.up.isUp) {
				// TODO: Only stop jumping once back on ground
				gameObjects.isJumping = false;
			}


			if(gameObjects.input.left.isDown) { // check for the left key being pressed
				let scale = gameObjects.player.scale;
				if(scale.x > 0) {
					scale.x = -scale.x;
				}
				gameObjects.player.body.x -= 5; // make the player go left (left is smaller x values)
				gameObjects.player.animations.play('walk', 10, true);
				gameObjects.footsteps.resume();
			} else if(gameObjects.input.right.isDown) { // check for the right key being pressed
				let scale = gameObjects.player.scale;
				if(scale.x < 0) {
					scale.x = -scale.x;
				}
				gameObjects.player.body.x += 5; // make the player go right (right is bigger x values)
				gameObjects.player.animations.play('walk', 10, true);
				gameObjects.footsteps.resume();
			} else {
				gameObjects.player.animations.stop('walk');
				gameObjects.footsteps.pause();
			}
		} else {
			gameObjects.footsteps.pause();
		}


		// cloud parallax
		gameObjects.cloud1.x = game.camera.x / 2 + 500;
		gameObjects.cloud1.y = game.camera.y / 2 + 400;
		gameObjects.cloud2.x = game.camera.x / 2 + 1100;
		gameObjects.cloud2.y = game.camera.y / 2 + 300;
		gameObjects.cloud3.x = game.camera.x / 2 + 1800;
		gameObjects.cloud3.y = game.camera.y / 2 + 450;
	}

	return updateFunction;
});

