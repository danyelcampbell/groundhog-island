window.export("update", function(game){
	var self = this;
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
	if(this.input.up.isUp) {
		// TODO: Only stop jumping once back on ground
		this.isJumping = false;
	}
/*
	if ((this.player.x >= 2300) || (this.player.x <= 2400)) // player goes to far out to sea
	{
		// make hungry shark animation show.
		
		this.hungryshark = game.add.sprite(game.world.centerX = 2300, game.world.centerY + 380, "sharkdeath")
		this.hungryshark.anchor.setTo(0.5, 0.5);
		this.hungryshark.scale.setTo(3, 3);
		this.hungryshark.animations.add("sharkattack");
		this.hungryshark.animations.play("sharkattack", 4, true);
		game.physics.arcade.enable(this.hungryshark);
		
		

		//player die

		this.player.visibility === false; 
	}
*/

	if(this.input.left.isDown) { // check for the left key being pressed
		let scale = this.player.scale;
		if(scale.x > 0) {
			scale.x = -scale.x;
		}
		this.player.body.x -= 5; // make the player go left (left is smaller x values)
		this.player.animations.play("walk", 10, true);
	} else if(this.input.right.isDown) { // check for the right key being pressed
		let scale = this.player.scale;
		if(scale.x < 0) {
			scale.x = -scale.x;
		}
		this.player.body.x += 5; // make the player go right (right is bigger x values)
		this.player.animations.play("walk", 10, true);
	} else {
		this.player.animations.stop("walk");
	}
});

