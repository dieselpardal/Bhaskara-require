define(['main/directives/equacao-teste-directive'], function(equacaoTesteDirective) {

  describe('Directivo de Teste de Equacao', function () {

    it('Verificar se o endereco de Teste esta localizado.', function() {
         expect(equacaoTesteDirective.restrict).toBe('A');
         });
    });
});