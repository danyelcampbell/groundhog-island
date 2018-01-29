window.onload = function() {
	window.require(['preload', 'create', 'update', 'render', 'CameraMover', 'PlaneInteraction', 'FlyAway'], function(preload, create, update, render, CameraMover, PlaneInteraction, FlyAway) {
		var init = {
			screenWidth: 800,
			screenHeight: 600,
			camX: 100,
			camY: 100,
			playerX: 0,
			playerY: 0
		};

		class Intro {
			constructor(game) {
				this.game = game;
			}
			preload() {
				this.game.load.video('vid', 'assets/video/intro-small.mov');
			}
			create() {
				this.vid = this.game.add.video('vid');
				this.vid.play();
				this.vid.addToWorld();
				var self = this;
				this.vid.onComplete.add(function(){
					self.game.state.start('MainGame');
				});
				this.game.input.onDown.add(function() {
					self.vid.stop(); // stops playing and cancels the onComplete
					self.game.state.start('MainGame');
				});
			}
			update() {
			}
		}

		class MainGame {
			constructor(game) {
				this.game = game;
				this.gameObjects = {};
				this.cameraMover = new CameraMover(init, this.gameObjects, this.game);
				this.flyAway = new FlyAway(this.gameObjects, this.game);
				this.planeInteraction = new PlaneInteraction(this.gameObjects, this.game, this.flyAway);
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
				this.flyAway.update();
			}
			render() {
				render.call(this.gameObjects, this.game);
			}
		}

		var game = new Phaser.Game(init.screenWidth, init.screenHeight, Phaser.AUTO, '', undefined, false, false);

		game.state.add('Intro', Intro);
		game.state.add('MainGame', MainGame);
		game.state.start('Intro');
	});
};