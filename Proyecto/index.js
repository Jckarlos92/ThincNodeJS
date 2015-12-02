/*var server = require ('./server.js');

//server(); // Invocas al objeto, ya que no es una funcion

var config = {
	port : 8080
};

server.config (config); // server-config ({}) Esto es nulo, entonces tomaria el 8080 del server.js
server.start();

console.log ('I m on the app  :)');*/

var express = require('express');
var app = express();
var messagesRoutes = require('./routes/messages');
var usersRoutes = require('./routes/users');
var PORT = 8080; 


// Middle ware
var userCount = 0;

function userCounter (req, res, next) {
	userCount ++;
	console.log ('Visitors: ' + userCount);
	next();
}

app.use(userCounter); 

/*
* Middleware to serve static files
*/
app.use(express.static(__dirname + '/public'));

// Routes
app.get ('/', function (req, res){
	res.send('Hello express');
});

app.use('/messages', messagesRoutes);
app.use('/users', usersRoutes);

// Start Server
app.listen(PORT);
console.log ("Listening on PORT: " + PORT);

/*

app.route('/messages')
  .get(function(req, res) {
    res.send(messages);
  })
  .post(function(req, res) {
    var newMessage = 'Message ' + messages.length;
	messages.push(newMessage);
	res.send(newMessage);
  })



*/