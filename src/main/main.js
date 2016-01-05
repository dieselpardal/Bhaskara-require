require.config({
    baseUrl: '/src/main',
    'paths': {
        'angular':'../../node_modules/angular/angular.min',
        'angularRoute': '../../node_modules/angular-route/angular-route.min',
        'angular-mask':'../../node_modules/angular/mask.min',
        'angular-mocks':'../../node_modules/angular-mocks/angular-mocks',
        'ng-table':'../../node_modules/angular/ng-table',
        'd3':'../../node_modules/angular/d3.min',
        'domReady': '../../js/domReady'

    },
    shim:{
        'angular': {
          exports: 'angular'
    },
        "angularRoute": {
          deps: ["angular"]
            }
    }
});
// Chamando módulo principal para iniciar a aplicação
require([
	'angular',
	'app',
	'domReady','d3',
	'controllers/bhaskara-controller',
	'controllers/bhaskara-grafico-linha-controller',
	'controllers/bhaskara-grafico-total-controller',
	'factories/constantes-factory',
	'services/bhaskara-service',
	'services/graficos-service',
	'filters/sinal-positivo-com-zero-filtro',
	'filters/sinalA-filtro',
	'filters/sinalB-filtro',
	'filters/sinalC-filtro',
	'directives/equacao-teste-directive'

], function(angular, app, domReady){
	'use strict';
	app.config(['$routeProvider', function($routeProvider){

		$routeProvider
		.when('/equacao', { templateUrl: 'resources/partials/equacao.html', controller: 'equacaoController' })
		.when('/equacaoGraficoLinha', { templateUrl: 'resources/partials/equacao-grafico-linha.html', controller: 'equacaoGraficoLinhaController' })
		.when('/equacaoGraficoTotal', { templateUrl: 'resources/partials/equacao-grafico-total.html', controller: 'equacaoGraficoTotalController' })
		.when('/teste', { templateUrl: '../test/teste-coverage.html', controller: '' })
		.otherwise({ redirectTo: '/' });

	}]);

	domReady(function(){
		angular.bootstrap(document, ['app']);
	});
});

