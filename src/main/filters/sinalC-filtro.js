define(['filters/filters','services/bhaskara-service'], function(filters,bhaskaraService) {

'use strict';
 filters.filter('sinalC', function(bhaskaraService) {
     return function (numero) {
       if(bhaskaraService.isInvalido(numero)) {
         return '' ;
       } else {
               return bhaskaraService.operacaoSemUm(numero);
               }
     };
   });

 });