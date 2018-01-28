window.export('create', function(game) {
	game.world.setBounds(0, 0, 1000, 1000);
	game.physics.startSystem(Phaser.Physics.ARCADE);

	// Background color (change this)
	game.stage.backgroundColor = "#CCCCCC";
	//this.background = game.add.sprite(game.world.centerX + 100, game.world.centerY, 'sky');
	//this.background.anchor.setTo(0.5, 0.5);
	//this.background.scale.setTo(50, 5);

	this.platforms = game.add.physicsGroup();
    // Add the tilemap
    this.map = game.add.tilemap('tilemap');
    this.map.addTilesetImage('Sky', 'sky');
    this.map.addTilesetImage('Clouds', 'clouds');
    this.backgroundLayer = this.map.createLayer('background');
    this.backgroundLayer.scale.setTo(4, 4);
    this.backgroundLayer.scrollFactorX = 0.3;
    this.backgroundLayer.scrollFactorY = 0.5;
    this.map.addTilesetImage('swg', 'sandandwater');
    this.foregroundLayer = this.map.createLayer('Tile Layer 1');
    this.foregroundLayer.scale.setTo(4, 4);


    // Plane
    this.plane = game.add.sprite(game.world.centerX - 200, game.world.centerY + 300, 'plane');
	this.plane.anchor.setTo(0.5, 0.5);
	this.plane.scale.setTo(3, 3);
	this.plane.animations.add('flames');
	this.plane.animations.play('flames', 10, true);
	game.physics.arcade.enable(this.plane);

	// Add the player sprite, set its anchor to the center, and spawn it in the center (change this)
	this.player = game.add.sprite(game.world.centerX + 200, game.world.centerY, 'player');
	this.player.anchor.setTo(0.5, 0.5);
	this.player.scale.setTo(4, 4);
	game.physics.arcade.enable(this.player);
	this.player.body.gravity.y = 500;
	this.player.body.drag = new Phaser.Point(200,0);
	this.player.body.collideWorldBounds = true;
	this.player.animations.add('walk');


	// platforms
	this.box1 = this.platforms.create(game.world.centerX - 200, game.world.centerY + 405, 'box');
	this.box1.anchor.setTo(0.5, 0.5);
	this.box1.scale.setTo(5000, 10);
	this.platforms.setAll('body.immovable', true);

	// Enable input
	this.input = {
		up: game.input.keyboard.addKey(Phaser.Keyboard.UP),
		left: game.input.keyboard.addKey(Phaser.Keyboard.LEFT),
		right: game.input.keyboard.addKey(Phaser.Keyboard.RIGHT),
		one: game.input.keyboard.addKey(Phaser.Keyboard.ONE),
		two: game.input.keyboard.addKey(Phaser.Keyboard.TWO),
		three: game.input.keyboard.addKey(Phaser.Keyboard.THREE),
	};

    this.foregroundLayer.resizeWorld();

    this.dialog = game.add.sprite(400, 500, 'dialog');
    this.dialog.anchor.setTo(0.5, 0.5);
    this.dialog.fixedToCamera = true;
    this.dialog.scale.setTo(20, 20);
    this.dialog.visible = false;
    this.dialogLines = [];

    // background sound, always going
	var seagulls = game.add.audio('wavesandseagulls');
	seagulls.loopFull(); // plays and loops
	seagulls.volume = 0.5;
	//seagulls.play();

	// footstep sound
	this.footsteps = game.add.audio('footsteps');
	this.footsteps.loop = true;
	this.footsteps.play();
	this.footsteps.pause();
});