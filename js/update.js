window.export("update", function(game){
	var self = this;

	if(!this.planeMode) {
		game.physics.arcade.collide(this.player, this.platforms, function(){
			self.isOnGround = true;
		});

		if(this.input.up.isDown) { // check for the up key being pressed
			if(!this.isJumping && this.isOnGround) {
				this.isOnGround = false;
				this.player.body.velocity.y -= 300; // make the player go up (up is smaller y values)
			}
			this.isJumping = true;
		}

		if ((this.player.x >= 2300) && (this.player.x <= 2400)) // player goes to far out to sea
		{
			
			
			// make hungry shark animation show.
			this.shark.visible = false;
			var something = this.hungryshark.visible ? this.hungryshark.visible = true : this.hungryshark.visible = true ; 
			// player die
			this.player.visible = false;
			//deathchecker(); dead? restart
			if(this.deathCheck){ 
				this.deathCheck = false;
				setTimeout(function() {
					// game over
					// TODO: Add game over screen
					game.state.start("MainGame");
					//window.location.reload();
				}, 5000);
			}
				
		}

		if(this.input.up.isUp) {
			// TODO: Only stop jumping once back on ground
			this.isJumping = false;
		}


		if(this.input.left.isDown) { // check for the left key being pressed
			let scale = this.player.scale;
			if(scale.x > 0) {
				scale.x = -scale.x;
			}
			this.player.body.x -= 5; // make the player go left (left is smaller x values)
			this.player.animations.play('walk', 10, true);
			this.footsteps.resume();
		} else if(this.input.right.isDown) { // check for the right key being pressed
			let scale = this.player.scale;
			if(scale.x < 0) {
				scale.x = -scale.x;
			}
			this.player.body.x += 5; // make the player go right (right is bigger x values)
			this.player.animations.play('walk', 10, true);
			this.footsteps.resume();
		} else {
			this.player.animations.stop('walk');
			this.footsteps.pause();
		}
	} else {
		this.footsteps.pause();
	}


	// cloud parallax
	this.cloud1.x = game.camera.x / 2 + 500;
	this.cloud1.y = game.camera.y / 2 + 400;
	this.cloud2.x = game.camera.x / 2 + 1100;
	this.cloud2.y = game.camera.y / 2 + 300;
	this.cloud3.x = game.camera.x / 2 + 1800;
	this.cloud3.y = game.camera.y / 2 + 450;
});

