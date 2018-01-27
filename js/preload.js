window.export('preload', function(game){
	game.load.spritesheet('player', 'assets/sprites/PrisonerWalking.png', 32, 32, 8);
	game.load.image('box', 'assets/sprites/box.png');
	game.load.tilemap('tilemap', 'assets/tilemap/Map2.json', null, Phaser.Tilemap.TILED_JSON);
	game.load.image('sandandwater', 'assets/tilemap/Sand and Water.png');
	game.load.image('sky', 'assets/tilemap/Sky.png');
});