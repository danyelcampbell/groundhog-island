window.export('preload', function(game){
	game.load.audio('wavesandseagulls', ['assets/audio/Waves_Seagulls.mp3']);
	game.load.audio('footsteps', ['assets/audio/Footsteps.mp3']);
	game.load.spritesheet('player', 'assets/sprites/PrisonerWalking.png', 32, 32, 8);
	game.load.spritesheet('bomb', 'assets/sprites/nuke.png', 32, 32, 2);
	game.load.image('box', 'assets/sprites/empty.png');
	game.load.tilemap('tilemap', 'assets/tilemap/Map4.json', null, Phaser.Tilemap.TILED_JSON);
	game.load.tilemap('tilemapsky', 'assets/tilemap/Map3.json', null, Phaser.Tilemap.TILED_JSON);
	game.load.image('sandandwater', 'assets/tilemap/SandWaterGrass.png');
	game.load.image('sky', 'assets/tilemap/SkyLight.png');
	game.load.image('oldsky', 'assets/tilemap/Sky.png');
	game.load.image('clouds', 'assets/tilemap/Clouds.png');
	game.load.spritesheet('native', 'assets/sprites/Native.png', 32, 32, 7);
	game.load.image('trees', 'assets/tilemap/Palm Tree.png');
	game.load.spritesheet('plane', 'assets/sprites/Plane Crash.png', 64, 64, 2);
	game.load.spritesheet('waterplane', 'assets/sprites/Water Plane.png', 200, 200, 4);
	game.load.image('dialog', 'assets/sprites/Box.png');
	game.load.image('playerresponse', 'assets/sprites/Box2.png');
	game.load.spritesheet('swimmingshark', 'assets/sprites/SwimmingShark.png', 70, 70, 33); // box
	game.load.spritesheet('hungryshark', 'assets/sprites/HungryShark.png', 70, 70, 17); // bloody mess


});