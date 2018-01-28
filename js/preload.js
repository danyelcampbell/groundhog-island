window.export('preload', function(game){
	game.load.audio('wavesandseagulls', ['assets/audio/Waves_Seagulls.mp3']);
	game.load.audio('footsteps', ['assets/audio/Footsteps.mp3']);
	game.load.spritesheet('player', 'assets/sprites/PrisonerWalking.png', 32, 32, 8);
	game.load.spritesheet('bomb', 'assets/sprites/nuke.png', 32, 32, 2);
	game.load.image('box', 'assets/sprites/empty.png');
	game.load.tilemap('tilemap', 'assets/tilemap/Map3.json', null, Phaser.Tilemap.TILED_JSON);
	game.load.image('sandandwater', 'assets/tilemap/swg.png');
	game.load.image('sky', 'assets/tilemap/Sky.png');
	game.load.image('clouds', 'assets/tilemap/Clouds.png');
	game.load.spritesheet('plane', 'assets/sprites/Plane Crash.png', 150, 150, 4);
	game.load.image('dialog', 'assets/sprites/Text Box.png');
	game.load.spritesheet('native', 'assets/sprites/Native.png', 32, 32, 7);

});