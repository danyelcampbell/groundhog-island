window.require([], function() {
	'use strict';
	
	window.export('Intro', function() {
		class Intro {
			constructor(game) {
				this.game = game;
			}
			preload() {
				this.game.load.video('vid', 'assets/video/intro-small.mp4');
			}
			create() {
				this.vid = this.game.add.video('vid');
				this.vid.play();
				this.vid.addToWorld();
				var self = this;
				this.vid.onComplete.add(function(){
					self.game.state.start('Level1');
				});
				this.game.input.onDown.add(function() {
					self.vid.stop(); // stops playing and cancels the onComplete
					self.game.state.start('Level1');
				});
			}
			update() {
			}
		}

		return Intro;
	});
});