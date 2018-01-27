window.onload = function() {
	window.require(['preload', 'create', 'update', 'render'], function(preload, create, update, render) {
		function preloader() {
			preload(game);
		}

		function creater() {
			create(game);
		}

		function updater() {
			update(game);
		}

		function renderer() {
			render(game);
			
		}
		var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preloader, create: creater, update: updater, render: renderer });
	});
};