window.export("create", function(game){

	var map;
	var layer;

	// Add the player sprite, set its anchor to the center, and spawn it in the center (change this)
	this.player = game.add.sprite(game.world.centerX, game.world.centerY, "player");
	this.player.anchor.setTo(0.5, 0.5);
	this.player.scale.setTo(4, 4);
    
	// Add the tree sprite, set its anchor to center left
	this.tree = game.add.sprite(game.world.x = 20, game.world.y = 20, "tree"); // works there.
	this.tree.anchor.setTo(0.5, 0.5);
	this.tree.scale.setTo(4, 4);

	// Set background gray, 
	game.stage.backgroundColor = "#CCCCCC";

	this.map = game.add.tilemap("Map");
	this.map.addTilesetImage("beach","tiles");

	layer = map.createLayer("World1");
    
	layer.resizeWorld();
	/* 
	beach = game.add.group();
	beach.enablyBody = true;
    var ground = beach.create(0, game.world.height - 64, "ground");
    
    var data = '';

    for (var y = 0; y < 128; y++)
    {
        for (var x = 0; x < 128; x++)
        {
            data += game.rnd.between(0, 20).toString();

            if (x < 127)
            {
                data += ',';
            }
        }

        if (y < 127)
        {
            data += "\n";
        }
 */
});

function MyFunction() {

}