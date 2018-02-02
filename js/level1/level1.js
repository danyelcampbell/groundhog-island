window.require(['preload', 'create', 'update', 'render', 'CameraMover', 'PlaneInteraction', 'FlyAway'],
	function(preload, create, update, render, CameraMover, PlaneInteraction, FlyAway) {
	'use strict';
	
	window.export('Level1', function() {

		var init = {
			screenWidth: 800,
			screenHeight: 600,
			camX: 100,
			camY: 100,
			playerX: 0,
			playerY: 0
		};

		class Level1 {
			constructor(game) {
				this.game = game;
			}
			preload() {
				preload(this.game);
			}
			create() {
				this.gameObjects = create(this.game);
				this.cameraMover = new CameraMover(init, this.gameObjects, this.game);
				this.flyAway = new FlyAway(this.gameObjects, this.game);
				this.planeInteraction = new PlaneInteraction(this.gameObjects, this.game, this.flyAway);
			}
			update() {
				update(this.gameObjects, this.game);
				this.cameraMover.smoothCameraMove();
				this.planeInteraction.update();
				this.flyAway.update();
			}
			render() {
				render(this.gameObjects, this.game);
			}
		}

		return Level1;
	});
});