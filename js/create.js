window.export('create', function(game, init) {
	game.world.setBounds(0, 0, 1000, 1000);
	game.physics.startSystem(Phaser.Physics.ARCADE);
	this.platforms = game.add.physicsGroup();

	// Background color (change this)
	game.stage.backgroundColor = "#CCCCCC";

	// Add the player sprite, set its anchor to the center, and spawn it in the center (change this)
	this.player = game.add.sprite(game.world.centerX, game.world.centerY, 'player');
	this.player.anchor.setTo(0.5, 0.5);
	this.player.scale.setTo(4, 4);
	game.physics.arcade.enable(this.player);
	this.player.body.gravity.y = 500;
	this.player.body.drag = new Phaser.Point(200,0);
	this.player.body.collideWorldBounds = true;

	var box = this.platforms.create(game.world.centerX, game.world.centerY + 200, 'box');
	box.anchor.setTo(0.5, 0.5);
	box.scale.setTo(10, 3);
	this.platforms.setAll('body.immovable', true);

	// Enable input
	this.input = {
		up: game.input.keyboard.addKey(Phaser.Keyboard.UP),
		left: game.input.keyboard.addKey(Phaser.Keyboard.LEFT),
		right: game.input.keyboard.addKey(Phaser.Keyboard.RIGHT)
	};

    //// grab initial positions
    //init.camX = game.camera.x;
    //init.camY = game.camera.y;
    //init.playerX = this.player.x;
    //init.playerY = this.player.y;
});