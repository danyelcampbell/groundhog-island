window.onload = function() {
	window.require(['preload', 'create', 'update', 'render', 'CameraMover'], function(preload, create, update, render, CameraMover) {
		var init = {
			screenWidth: 800,
			screenHeight: 600,
			camX: 100,
			camY: 100,
			playerX: 0,
			playerY: 0
		};
		var gameObjects = {};
		function preloader() {
			preload.call(gameObjects, game);
		}

		function creator() {
			create.call(gameObjects, game, init);
		}

		function updater() {
			update.call(gameObjects, game);
			cameraMover.smoothCameraMove();
		}

		function renderer() {
			render.call(gameObjects, game);
			
		}
		var game = new Phaser.Game(init.screenWidth, init.screenHeight, Phaser.AUTO, '', { preload: preloader, create: creator, update: updater, render: renderer }, false, false);
		var cameraMover = new CameraMover(init, gameObjects, game);
		Phaser.Canvas.setSmoothingEnabled(game.context, false);
	});
};