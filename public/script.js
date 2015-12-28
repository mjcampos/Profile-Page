var myApp = angular.module('myApp', ['ngRoute']);

// Clientside routing
myApp.config(function($routeProvider) {
	$routeProvider
	.when('/', {templateUrl: 'partials/home.html'})
	.when('/projects', {templateUrl: 'partials/projects.html'})
	.otherwise({redirectTo: '/'});
})