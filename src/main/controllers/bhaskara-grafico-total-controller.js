define(['controllers/controllers','factories/constantes-factory','services/bhaskara-service','services/graficos-service'], function(controllers){
	controllers.controller('equacaoGraficoTotalController', ['$scope','padrao','bhaskaraService','graficoService', function($scope,padrao,bhaskaraService,graficoService){

    $scope.inicioA = padrao.inicioA;
    $scope.inicioB = padrao.inicioB;
    $scope.inicioC = padrao.inicioC;

    $scope.finalA = padrao.finalA;
    $scope.finalB = padrao.finalB;
    $scope.finalC = padrao.finalC;

    var margin = {top: 0, right: 0, bottom: 0, left: 0};

    var svg = d3.select(document.getElementById('telaTotal')).append('svg')
         .attr('width', padrao.largura)
         .attr('height', padrao.altura)
         .append('g')
         .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    $scope.gerarGrafico = function () {
      var responder1 = [];
      var responder2 = [];
      graficoService.limpaQuadro(svg,0,0,padrao.largura,padrao.altura,padrao.corDeTela,'gold');
      for(var passoA=$scope.inicioA; passoA<=$scope.finalA;passoA++) {
        for(var passoB=$scope.inicioB; passoB<=$scope.finalB;passoB++) {
          for(var passoC=$scope.inicioC; passoC<=$scope.finalC;passoC++) {
            if ( passoA !== 0) {
              xx1 = bhaskaraService.calcularBhaskara( padrao.numeroPositivo,passoA, passoB, passoC);
              xx2 = bhaskaraService.calcularBhaskara( padrao.numeroNegativo,passoA, passoB, passoC);
              graficoService.circuloCentral(svg,xx1 * padrao.escala,xx2 * padrao.escala ,padrao.raio,padrao.corDeCirculo);
              }
          }
        }
      }
    };
}]);
});
