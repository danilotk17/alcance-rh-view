var app = angular.module("app", [ 'ngRoute' ]);

app.config(function($routeProvider) {
	$routeProvider.when('/', {
		controller : 'HomeController',
		templateUrl : '/static/pages/home.html'
	}).when('/empresa', {
		controller : 'EmpresaController',
		templateUrl : '/static/pages/empresa.html'
	}).otherwise({
		redirectTo : '/'
	});
});