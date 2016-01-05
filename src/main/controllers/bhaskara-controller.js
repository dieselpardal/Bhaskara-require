define(['controllers/controllers','factories/constantes-factory','services/bhaskara-service'], function(controllers){
	controllers.controller('equacaoController', ['$scope','padrao','bhaskaraService', function($scope,padrao,bhaskaraService){

		angular.extend($scope, {
			a : padrao.A,
			b : padrao.B,
			c : padrao.C
		});
		$scope.resultarBhaskara = function () {
     $scope.x1 = bhaskaraService.calcularBhaskara(padrao.numeroPositivo, $scope.a, $scope.b, $scope.c);
     $scope.x2 = bhaskaraService.calcularBhaskara(padrao.numeroNegativo, $scope.a, $scope.b, $scope.c);
     };
	}]);
});


