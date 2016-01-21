define(['services/services','services/calculo-bhaskara','factories/constantes-factory'], function(services,calculoBhaskara,padrao) {
 services.service('bhaskaraService',['padrao','calculoBhaskara', function(padrao,calculoBhaskara) {

  function calcularBhaskara (sinal, a, b, c) {
    return calculoBhaskara.calcularBhaskaraCompleto(sinal, a, b, c);
  }

  function calcularDelta(a, b, c) {
    return calculoBhaskara.calcularDelta( a, b, c);
  }

  function operacaoPositivo(numero) {
      if (numero >0 ){
        return '+' + numero;
      } else {
              return '' + numero;
             }
  }

 function operacaoSemUm(numero) {
    switch(numero) {
       case  1: return '+';
       case  0: return '';
       case -1: return '-';
      default: {
          if (numero >1 ){
                    return '+' + numero;
                    } else
                    {
                    return '' + numero;
                    }
                }
        }
  }

  function isInvalido(numero) {
          return (angular.isUndefined(numero) || numero === padrao.anular ||  numero === null);
  }

  return {
          calcularBhaskara:calcularBhaskara,
          calcularDelta: calcularDelta ,
          operacaoPositivo: operacaoPositivo,
          operacaoSemUm: operacaoSemUm,
          isInvalido : isInvalido
         };
    }]);
});
