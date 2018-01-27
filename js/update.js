window.export('update', function(game){
	game.physics.arcade.collide(this.player, this.platforms);
	game.physics.arcade.collide(this.player, this.foregroundLayer);

	if(this.input.up.isDown) { // check for the up key being pressed
		if(!this.isJumping) {
			this.player.body.velocity.y -= 300; // make the player go up (up is smaller y values)
		}
		this.isJumping = true;
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
	}
	if(this.input.right.isDown) { // check for the right key being pressed
		let scale = this.player.scale;
		if(scale.x < 0) {
			scale.x = -scale.x;
		}
		this.player.body.x += 5; // make the player go right (right is bigger x values)
	}
});

