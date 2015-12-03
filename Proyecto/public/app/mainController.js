var messengerApp = angular.module('messengerApp', [
	'ngRoute'
]);

messengerApp.config(['$routeProvider',
	function ($routeProvider){
		$routeProvider.
			when('/users', {
				templateUrl: 'app/users/list.html',
				controller: 'messengerCtrl'
			})
	}]);

messengerApp.controller('messengerCtrl', ['$scope', '$http', 
	function ($scope, $http) {

	$http.get('/users').success(function(data) {
		$scope.users = data;
	});

	$scope.orderProperty = "name";
}]);