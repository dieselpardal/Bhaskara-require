/*global describe, it */
define(['services/calculo-bhaskara'], function(calculoBhaskara) {
//define(['main'], function (main) {
  describe('Calculo de Bhaskara', function () {
    describe('Verifica o calculo de um grau', function () {
      it('should be something', function () {
        expect(calculoBhaskara.calcularBhaskaraUmGrau(-1,1)).toEqual(1);
      });
    });
  });
});



