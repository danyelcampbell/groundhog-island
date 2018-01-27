(function() {
	class CameraMover {
		constructor(init, gameObjects, game) {
			this.init = init;
			this.gameObjects = gameObjects;
			this.game = game;
		    this.moveBufferX = [];
		    this.moveBufferY = [];
		    this.bufferLength = 30;
		    this.bufferPosition = 0;

		    this.initMoveBuffers();
		}

		initMoveBuffers(){
	        for(var i = 0; i < this.bufferLength; i++){
	            this.moveBufferX[i] = this.init.camX;
	            this.moveBufferY[i] = this.init.camY;
	        }
	    }

	    smoothCameraMove(){
	    	var player = this.gameObjects.player;
	    	var camera = this.game.camera;
	        this.moveBufferX[this.bufferPosition] = player.x - this.init.playerX - this.init.screenWidth / 2;
	        this.moveBufferY[this.bufferPosition] = player.y - this.init.playerY - this.init.screenHeight / 2;

	        this.bufferPosition++;
	        if(this.bufferPosition === this.bufferLength){
	            this.bufferPosition = 0;
	        }
	        var avg = this.calcAvg();
	        camera.x = avg[0];
	        camera.y = avg[1];
	    }

	    calcAvg(){
	        var totalX = 0;
	        var totalY = 0;
	        for(var i = 0; i < this.bufferLength; i++){
	            totalX += this.moveBufferX[i];
	            totalY += this.moveBufferY[i];
	        }
	        return [totalX/this.bufferLength, totalY/this.bufferLength];
	    }
	}
	window.export('CameraMover', CameraMover);
})();