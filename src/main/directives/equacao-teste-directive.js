
define(['directives/directives'], function(directives){
	directives.directive('equacaoTesteDirective', [function(){
		return {
			restrict: 'A',
			scope: false,
			templateUrl: "resources/partials/equacao-teste.html"
			};
	}]);
});