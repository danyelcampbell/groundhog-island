window.export("create", function(game) {
	game.world.setBounds(0, 0, 1000, 1000);
	game.physics.startSystem(Phaser.Physics.ARCADE);

	game.stage.backgroundColor = "#CCCCCC";

	this.platforms = game.add.physicsGroup();

    // Add the background
    this.map = game.add.tilemap('tilemap');

    this.skyMap = game.add.tilemap('tilemapsky');
    this.skyMap.addTilesetImage('Sky', 'oldsky');
    this.skyLayer = this.skyMap.createLayer('background');
	this.skyLayer.scale.setTo(4, 4);
    this.skyLayer.scrollFactorX = 0.3;
    this.skyLayer.scrollFactorY = 0.5;

    // Sky and cloud tilemaps were buggy, removed.

	this.cloud1 = game.add.sprite(500, 400, 'clouds');
	this.cloud1.anchor.setTo(0.5, 0.5);
	this.cloud1.scale.setTo(2, 2);
	this.cloud2 = game.add.sprite(1100, 300, 'clouds');
	this.cloud2.anchor.setTo(0.5, 0.5);
	this.cloud2.scale.setTo(2, 2);
	this.cloud3 = game.add.sprite(1800, 450, 'clouds');
	this.cloud3.anchor.setTo(0.5, 0.5);
	this.cloud3.scale.setTo(2, 2);

    // Add the ground
    this.map.addTilesetImage('Environment2', 'sandandwater');
    this.foregroundLayer = this.map.createLayer('Ground');
    this.foregroundLayer.scale.setTo(4, 4);


    // Plane
    this.plane = game.add.sprite(game.world.centerX - 310, game.world.centerY + 340, 'plane');
	this.plane.anchor.setTo(0.5, 0.5);
	this.plane.scale.setTo(6, 6);
	this.plane.animations.add('flames');
	this.plane.animations.play('flames', 5, true);

	game.physics.arcade.enable(this.plane);

	// Native 
	this.native = game.add.sprite(1000, 840, 'native');
	this.native.anchor.setTo(0.5, 0.5);
	this.native.scale.setTo(4, 4);
	this.native.animations.add('native');
	this.native.animations.play('native', 7, true);
	game.physics.arcade.enable(this.native);

	// Swimming Shark
	this.shark = game.add.sprite( 2500,  890, "swimmingshark");
	this.shark.anchor.setTo(0.5, 0.5);
	this.shark.scale.setTo(3, 3);
	this.shark.animations.add("swimmingshark");
	this.shark.animations.play("swimmingshark", 4, true);
	game.physics.arcade.enable(this.shark);

	this.deathCheck = true;

	// Hungry Shark

	this.hungryshark = game.add.sprite(2550,  895, "hungryshark");
	this.hungryshark.anchor.setTo(0.5, 0.5);
	this.hungryshark.scale.setTo(3, 3);
	this.hungryshark.animations.add("hungryshark");
	this.hungryshark.animations.play("hungryshark",1 , true);
	game.physics.arcade.enable(this.hungryshark);

	this.hungryshark.visible = false;
	
	// Add the player sprite, set its anchor to the center, and spawn it in the center (change this)
	this.player = game.add.sprite(game.world.centerX + 200, game.world.centerY, "player");
	this.player.anchor.setTo(0.5, 0.5);
	this.player.scale.setTo(4, 4);
	game.physics.arcade.enable(this.player);
	this.player.body.gravity.y = 500;
	this.player.body.drag = new Phaser.Point(200,0);
	this.player.body.collideWorldBounds = true;
	this.player.animations.add("walk");


	// Palm trees in front of player
	this.map.addTilesetImage('TREE', 'trees');
	this.treeLayer = this.map.createLayer('Trees');
	this.treeLayer.scale.setTo(4, 4);
	this.treeLayer.scrollFactorX = 1.05;
    this.treeLayer.scrollFactorY = 1;


	// platforms
	this.box1 = this.platforms.create(game.world.centerX - 200, game.world.centerY + 405, "box");
	this.box1.anchor.setTo(0.5, 0.5);
	this.box1.scale.setTo(5000, 10);
	this.platforms.setAll("body.immovable", true);


	// Enable input
	this.input = {
		up: game.input.keyboard.addKey(Phaser.Keyboard.UP),
		down: game.input.keyboard.addKey(Phaser.Keyboard.DOWN),
		left: game.input.keyboard.addKey(Phaser.Keyboard.LEFT),
		right: game.input.keyboard.addKey(Phaser.Keyboard.RIGHT),
		one: game.input.keyboard.addKey(Phaser.Keyboard.ONE),
		two: game.input.keyboard.addKey(Phaser.Keyboard.TWO),
		three: game.input.keyboard.addKey(Phaser.Keyboard.THREE),
	};

	this.foregroundLayer.resizeWorld();

	this.dialog = game.add.sprite(400, 125, "dialog");
	this.dialog.anchor.setTo(0.5, 0.5);
	this.dialog.fixedToCamera = true;
	this.dialog.scale.setTo(1.5, 1.2);
	this.dialog.visible = false;
	this.dialogLines = [''];

    this.playerResponse = game.add.sprite(400, 500, 'playerresponse');
    this.playerResponse.anchor.setTo(0.5, 0.5);
    this.playerResponse.fixedToCamera = true;
    this.playerResponse.scale.setTo(1.5, 1.5);
    this.playerResponse.visible = false;
    this.playerLines = [''];

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