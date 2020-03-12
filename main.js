$(document).ready(function() {
	'use strict';
	paper.install(window);
	paper.setup(document.getElementById('mainCanvas'));
	
	var tool = new Tool();
	/*var c;
	for(var x=25; x<400;  x+=50) {
		for(var y=25; y<400; y+=50) {
			c = Shape.Circle(x, y, 20);
			c.fillColor = 'green';
		}
	}
	paper.view.draw();
	*/
	tool.onMouseDown = function(event) {
		var c = Shape.Circle(event.point.x, event.point.y, 20);
		c.fillColor = 'green';
	}
	
});

