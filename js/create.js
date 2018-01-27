window.export('create', function(game) {
	// Background color (change this)
	game.stage.backgroundColor = "#CCCCCC";

	// Add the player sprite, set its anchor to the center, and spawn it in the center (change this)
	this.player = game.add.sprite(game.world.centerX, game.world.centerY, 'player');
	this.player.anchor.setTo(0.5, 0.5);
	this.player.scale.setTo(4, 4);
});