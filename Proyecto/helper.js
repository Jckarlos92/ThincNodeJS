/*var report = person.createReport(); // slow process
response.send(report);
console.log('I know you asked for a report');

person.createReport(function (reportData) {
	response.send(report);
});

console.log('I know you asked for a report');*/

function myMethod (param1) {
	console.log(param1);
}

var myParam = function (param2) {
	return param2 + 1;
};

myMethod(myParam);


var myVar = 1;


(function () {

	var myVar = 2;

	for (var i=0; i < 10; i++) {
		var foo = 1;

		console.log(foo); // 1
	}

	console.log (foo); // 1

})(); // Anonymous function

console.log(foo); // undefined


var server = {
	key1: '1',
	key2: '2',
	start: function () {

	}
};

server.key1; // 1
var desiredKey = 'key1';

for (var i = 1; i < 3; i++) {
	desiredKey = 'key' + 1;
	server[desiredKey]; // 1
}

// API conventions

[GET] /users
[GET] /single_user
[POST] /new_user
[PUT] /users

// Better way.

[GET] /users
[GET] /users /{id}
[POST] /users
[PUT] /users /{id}

var user = {
	id: 1,
	name: 'foo',
	address: {
		city: 'GDL',
		street: 'Real Acueducto'
	}
};

[GET] /users/1
[GET] /users/1/address/city
[PUT] /users/1/address/city

[GET] /messages
[GET] /messages/{id}
[POST] /messages
[GET] /users
[GET] /users/{id}
[POST] /users

http://thinc.com/users/1/address?page=3&auth=oauth

//PATH: /users/1/address
//QUERY: Después del '?' page=3&auth=oauth

// Checar las guías de estilo de prograacion de varias apss

// NOTE: Hacer commits atómicos "que solamente resuelvan 1 feature". Nunca subir commits que no funcionan

// Checar a http://www.addyosmani.com/

// parseInt ("08", 10); // Siempre parsear en base 10

// Usar triple igual

//Parse int isNAN

// Package json puede ser leido si pones npm install y trata de instalar las dependencias

// npm init inicias el proyecto

// .gitignore ignora los archivos que pongas de la manera /file

// Nomenclatura para versiones. Ej: 2.4.56

// El 2 es major release (cabio la arquitectura de  la app). El 4 es añadir nuevos features. El 56 es un bug que se reparo


// Patches
//'4.13.x'  === ~4.13.33

// Minor release
// 4.x === ^4.13.3

// Major release
// '*' === 'x'

/**
* Express response types
**/

res.download();
res.json();
res.end();
res.redirect('http://google.com');
res.render();


// 30 de Noviembre de 2015



// Tip : si solo se define funciones, no llevan punto y coma
// Si se definen variables, si lleva


/*
	Prototypal inheritance
*/
var User = function (id) {

}; // Lleva

function User(id, name, birth) {
	var age = new Date() - birth; // privada, no es parte de "this"
	this.id = id;
	this.name = name;

	function getAge() { // metodo privado, no es parte de "this"
		return age;
	}

	this.sayHello = function () {
		console.log ('Hi I am ' + this.name );
	};
} // No lleva

User.prototype.tellYourAge = function () {
	return age;
};

var miguel = new User(0, 'Miguel', new Date(1990, 05, 07));

console.log (miguel.id); // 0
miguel.sayHello // Hi I am Miguel

