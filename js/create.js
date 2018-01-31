window.export("create", function(){
	'use strict';
	function createFunc(game) {
		let objs = {};

		game.world.setBounds(0, 0, 1000, 1000);
		game.physics.startSystem(Phaser.Physics.ARCADE);

		game.stage.backgroundColor = "#CCCCCC";

		objs.platforms = game.add.physicsGroup();

		// Add the background
		objs.map = game.add.tilemap('tilemap');

		objs.skyMap = game.add.tilemap('tilemapsky');
		objs.skyMap.addTilesetImage('Sky', 'oldsky');
		objs.skyLayer = objs.skyMap.createLayer('background');
		objs.skyLayer.scale.setTo(4, 4);
		objs.skyLayer.scrollFactorX = 0.3;
		objs.skyLayer.scrollFactorY = 0.5;

		// Sky and cloud tilemaps were buggy, removed.

		objs.cloud1 = game.add.sprite(500, 400, 'clouds');
		objs.cloud1.anchor.setTo(0.5, 0.5);
		objs.cloud1.scale.setTo(2, 2);
		objs.cloud2 = game.add.sprite(1100, 300, 'clouds');
		objs.cloud2.anchor.setTo(0.5, 0.5);
		objs.cloud2.scale.setTo(2, 2);
		objs.cloud3 = game.add.sprite(1800, 450, 'clouds');
		objs.cloud3.anchor.setTo(0.5, 0.5);
		objs.cloud3.scale.setTo(2, 2);

		// Add the ground
		objs.map.addTilesetImage('Environment2', 'sandandwater');
		objs.foregroundLayer = objs.map.createLayer('Ground');
		objs.foregroundLayer.scale.setTo(4, 4);


		// Plane
		objs.plane = game.add.sprite(game.world.centerX - 310, game.world.centerY + 340, 'plane');
		objs.plane.anchor.setTo(0.5, 0.5);
		objs.plane.scale.setTo(6, 6);
		objs.plane.animations.add('flames');
		objs.plane.animations.play('flames', 5, true);

		game.physics.arcade.enable(objs.plane);

		// Native 
		objs.native = game.add.sprite(1000, 840, 'native');
		objs.native.anchor.setTo(0.5, 0.5);
		objs.native.scale.setTo(4, 4);
		objs.native.animations.add('native');
		objs.native.animations.play('native', 7, true);
		game.physics.arcade.enable(objs.native);

		// Swimming Shark
		objs.shark = game.add.sprite( 2500,  890, "swimmingshark");
		objs.shark.anchor.setTo(0.5, 0.5);
		objs.shark.scale.setTo(3, 3);
		objs.shark.animations.add("swimmingshark");
		objs.shark.animations.play("swimmingshark", 4, true);
		game.physics.arcade.enable(objs.shark);

		objs.deathCheck = true;

		// Hungry Shark

		objs.hungryshark = game.add.sprite(2550,  895, "hungryshark");
		objs.hungryshark.anchor.setTo(0.5, 0.5);
		objs.hungryshark.scale.setTo(3, 3);
		objs.hungryshark.animations.add("hungryshark");
		objs.hungryshark.animations.play("hungryshark",1 , true);
		game.physics.arcade.enable(objs.hungryshark);

		objs.hungryshark.visible = false;
		
		// Add the player sprite, set its anchor to the center, and spawn it in the center (change this)
		objs.player = game.add.sprite(game.world.centerX + 200, game.world.centerY, "player");
		objs.player.anchor.setTo(0.5, 0.5);
		objs.player.scale.setTo(4, 4);
		game.physics.arcade.enable(objs.player);
		objs.player.body.gravity.y = 500;
		objs.player.body.drag = new Phaser.Point(200,0);
		objs.player.body.collideWorldBounds = true;
		objs.player.animations.add("walk");


		// Palm trees in front of player
		objs.map.addTilesetImage('TREE', 'trees');
		objs.treeLayer = objs.map.createLayer('Trees');
		objs.treeLayer.scale.setTo(4, 4);
		objs.treeLayer.scrollFactorX = 1.05;
		objs.treeLayer.scrollFactorY = 1;


		// platforms
		objs.box1 = objs.platforms.create(game.world.centerX - 200, game.world.centerY + 405, "box");
		objs.box1.anchor.setTo(0.5, 0.5);
		objs.box1.scale.setTo(5000, 10);
		objs.platforms.setAll("body.immovable", true);


		// Enable input
		objs.input = {
			up: game.input.keyboard.addKey(Phaser.Keyboard.UP),
			down: game.input.keyboard.addKey(Phaser.Keyboard.DOWN),
			left: game.input.keyboard.addKey(Phaser.Keyboard.LEFT),
			right: game.input.keyboard.addKey(Phaser.Keyboard.RIGHT),
			one: game.input.keyboard.addKey(Phaser.Keyboard.ONE),
			two: game.input.keyboard.addKey(Phaser.Keyboard.TWO),
			three: game.input.keyboard.addKey(Phaser.Keyboard.THREE),
		};

		objs.foregroundLayer.resizeWorld();

		objs.dialog = game.add.sprite(400, 125, "dialog");
		objs.dialog.anchor.setTo(0.5, 0.5);
		objs.dialog.fixedToCamera = true;
		objs.dialog.scale.setTo(1.5, 1.2);
		objs.dialog.visible = false;
		objs.dialogLines = [''];

		objs.playerResponse = game.add.sprite(400, 500, 'playerresponse');
		objs.playerResponse.anchor.setTo(0.5, 0.5);
		objs.playerResponse.fixedToCamera = true;
		objs.playerResponse.scale.setTo(1.5, 1.5);
		objs.playerResponse.visible = false;
		objs.playerLines = [''];

		// background sound, always going
		var seagulls = game.add.audio('wavesandseagulls');
		seagulls.loopFull(); // plays and loops
		seagulls.volume = 0.5;
		//seagulls.play();

		// footstep sound
		objs.footsteps = game.add.audio('footsteps');
		objs.footsteps.loop = true;
		objs.footsteps.play();
		objs.footsteps.pause();

		return objs;
	}

	return createFunc;
});