define(['controllers/controllers','factories/constantes-factory','services/bhaskara-service','services/graficos-service'], function(controllers){
	controllers.controller('equacaoGraficoLinhaController', ['$scope','padrao','bhaskaraService','graficoService', function($scope,padrao,bhaskaraService,graficoService){

    $scope.valorA = padrao.A;
    $scope.valorB = padrao.B;
    $scope.valorC = padrao.C;

    var margem = {top: 0, right: 0, bottom: 0, left: 0};
    var svg = d3.select(document.getElementById('telaLinha')).append('svg')
         .attr('width', padrao.largura)
         .attr('height', padrao.altura)
         .append('g')
         .attr('transform', 'translate(' + margem.left + ',' + margem .top + ')');

    $scope.gerarGrafico = function () {
      var responder1 = [];
      var responder2 = [];
      var ponto = 0;
      var anteriorX = 0;
      var anteriorY = 0;
      graficoService.limpaQuadro(svg,0,0,padrao.largura,padrao.altura,padrao.corDeTela,'gold');
      escalaX = padrao.largura / 2;
      escalaY = padrao.altura / 2;
      for(var x=-escalaX; x<=escalaX;x++) {
            resultar = $scope.valorA * ( x * x ) + $scope.valorB * x + $scope.valorC;
            if ( ponto === 0 ){
              graficoService.circuloCentral(svg,x,-resultar ,padrao.raio,padrao.corDeCirculo);
              ponto = 1;
              }
            else{
              graficoService.linhaCentral(svg,anteriorX,anteriorY,x,-resultar,padrao.corDeCirculo );
              }
            anteriorX = x;
            anteriorY = -resultar;
      }
    };

}]);
});