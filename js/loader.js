(function() {
	'use strict';
	var modules = {};
	window.export = function(name, obj) {
		if(typeof obj === 'function') {
			obj = obj();
		}
		modules[name] = obj;
	};
	window.require = function(requires, func) {
		var params = [];
		for(var i = 0; i < requires.length; i++) {
			params.push(modules[requires[i]]);
		}
		func.apply(null, params);
	};
})();