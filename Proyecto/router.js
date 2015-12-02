
var routeHandler = {};

/*function routeHandler (pathname) {
	switch (pathname){
		case '/users' : return 'These are the users';
		case '/messages': return 'These are messages';
		default: return '';
	}

}*/

routeHandler['/users'] = function () {
	return 'These are users';
};

routeHandler['/messages'] = function () {
	return 'These are messages';
};


// With callbacks
var router = function (path, callback) {
	if (routeHandler[path]) {
		var message = routeHandler[path]();
		callback(message);
	} else {
		callback('');
	}
};

// Without callbacks
/*var router = function (path) {
	if (routeHandler[path]) {
		return routeHandler[path]();
	} 

	return '';
};*/


module.exports = router;