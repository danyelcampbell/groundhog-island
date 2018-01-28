window.export('preload', function(game){
	game.load.spritesheet('player', 'assets/sprites/PrisonerWalking.png', 32, 32, 8);
	game.load.image('box', 'assets/sprites/empty.png');
	game.load.tilemap('tilemap', 'assets/tilemap/Map3.json', null, Phaser.Tilemap.TILED_JSON);
	game.load.image('sandandwater', 'assets/tilemap/swg.png');
	game.load.image('sky', 'assets/tilemap/Sky.png');
	game.load.image('clouds', 'assets/tilemap/Clouds.png');
	game.load.spritesheet('plane', 'assets/sprites/Plane Crash.png', 150, 150, 4);
	game.load.image('dialog', 'assets/sprites/Text Box.png');
	game.load.audio('sfx001' ,'assets/audio/SoundEffects/waves_seagulls.mp3');
	game.load.spritesheet('swimmingshark', 'assets/sprites/SharkAttack.png', 70, 70, 14);
});