define(['services/services','factories/constantes-factory'], function(services,padrao){
services.service('calculoBhaskara',['padrao', function(padrao) {

calcularBhaskaraCompleto = function (sinal, a, b, c) {
  if (a === 0 ) {
    return calcularBhaskaraUmGrau(b,c);
  } else {
    var d = calcularDelta(a,b,c);
    if (sinal !=padrao.sinalInexistente) {
        return (-b + d) / (2 * a );
    } else {
        return (-b - d) / (2 * a );
    }
  }
};

calcularDelta = function  (a, b, c) {
  raiz = ( b * b  ) - 4 * a * c;
  if (raiz>=0) {
    return Math.sqrt( raiz);
  } else {
    return padrao.sinalInexistente;
  }
};

calcularBhaskaraUmGrau = function(b, c) {
  if (b === 0 ) {
    return padrao.sinalInexistente;
    } else {
      return ( -c ) / b;
    }
};

return {
        calcularBhaskaraCompleto:calcularBhaskaraCompleto,
        calcularDelta: calcularDelta ,
        calcularBhaskaraUmGrau: calcularBhaskaraUmGrau
    };
}]);

});

