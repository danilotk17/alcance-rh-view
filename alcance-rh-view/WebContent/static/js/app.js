var app = angular.module("app", [ 'ngRoute' ]);

app.config(function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
	$routeProvider
	.when('/home', {
		controller : 'HomeController',
		templateUrl : 'static/pages/home.html'
	}).when('/empresa', {
		controller : 'EmpresaController',
		templateUrl : 'static/pages/empresa.html'
	}).when('/servicos', {
		controller : 'ServicosController',
		templateUrl : 'static/pages/servicos.html'
	}).when('/clientes', {
		controller : 'ClientesController',
		templateUrl : 'static/pages/clientes.html'
	}).when('/contato', {
		controller : 'ContatoController',
		templateUrl : 'static/pages/contato.html'
	}).otherwise({
		redirectTo : '/home'
	});
});