window.onload = function() {
	window.require(['preload', 'create', 'update', 'render', 'CameraMover', 'PlaneInteraction'], function(preload, create, update, render, CameraMover, PlaneInteraction) {
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
			create.call(gameObjects, game);
		}

		function updater() {
			update.call(gameObjects, game);
			cameraMover.smoothCameraMove();
			planeInteraction.update();
		}

		function renderer() {
			render.call(gameObjects, game);
			
		}
		var game = new Phaser.Game(init.screenWidth, init.screenHeight, Phaser.AUTO, '', { preload: preloader, create: creator, update: updater, render: renderer }, false, false);
		var cameraMover = new CameraMover(init, gameObjects, game);
		var planeInteraction = new PlaneInteraction(gameObjects, game);
		var waves;
		//Phaser.Canvas.setSmoothingEnabled(game.context, false);
	});
};