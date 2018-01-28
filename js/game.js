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

		class MainGame {
			constructor(game) {
				this.game = game;
				this.gameObjects = {};
				this.cameraMover = new CameraMover(init, this.gameObjects, this.game);
				this.planeInteraction = new PlaneInteraction(this.gameObjects, this.game);
			}
			preload() {
				preload.call(this.gameObjects, this.game);
			}
			create() {
				create.call(this.gameObjects, this.game);
			}
			update() {
				update.call(this.gameObjects, this.game);
				this.cameraMover.smoothCameraMove();
				this.planeInteraction.update();
			}
			render() {
				render.call(this.gameObjects, this.game);
			}
		}

		var game = new Phaser.Game(init.screenWidth, init.screenHeight, Phaser.AUTO, '', undefined, false, false);

		game.state.add('MainGame', MainGame);
		game.state.start('MainGame');
	});
};