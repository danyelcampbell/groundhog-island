window.onload = function() {
	window.require(['preload', 'create', 'update', 'render'], function(preload, create, update, render) {
		var gameObjects = {};
		function preloader() {
			preload.call(gameObjects, game);
		}

		function creater() {
			create.call(gameObjects, game);
		}

		function updater() {
			update.call(gameObjects, game);
		}

		function renderer() {
			render.call(gameObjects, game);
			
		}
		var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preloader, create: creater, update: updater, render: renderer }, false, false);
		Phaser.Canvas.setSmoothingEnabled(game.context, false);
	});
};