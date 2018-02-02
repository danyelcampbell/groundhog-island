window.onload = function() {
	'use strict';
	window.require(['Intro', 'Level1'], function(Intro, Level1) {

		var game = new Phaser.Game(800, 600, Phaser.AUTO, '', undefined, false, false);

		game.state.add('Intro', Intro);
		game.state.add('Level1', Level1);
		game.state.start('Intro');
	});
};