define(['services/services','services/calculo-bhaskara','factories/constantes-factory'], function(services,calculoBhaskara,padrao) {
 services.service('graficoService',['padrao',function(padrao) {

function circulo(svg,x,y,r,cor) {
  svg.append('circle')
      .attr('class', 'origin')
      .attr('cx',x)
      .attr('cy',y)
      .attr('r', r)
      .attr('fill',cor);
}

function circuloCentral(svg,x,y,r,cor) {
  svg.append('circle')
      .attr('class', 'origin')
      .attr('cx',padrao.centroX+x)
      .attr('cy',padrao.centroY+y)
      .attr('r', r)
      .attr('fill',cor);
}

function linha (svg,lx1,ly1,lx2,ly2,cor) {
  svg.append('line')
      .attr('class', 'arrow')
      .attr('x1', lx1)
      .attr('x2', lx2)
      .attr('y1', ly1)
      .attr('y2', ly2)
      .attr('stroke',cor)
      .attr('marker-start', 'url(#triangle-start)');
}

function linhaCentral(svg,lx1,ly1,lx2,ly2,cor) {
  svg.append('line')
      .attr('class', 'arrow')
      .attr('x1', padrao.centroX+lx1)
      .attr('x2', padrao.centroX+lx2)
      .attr('y1', padrao.centroY+ly1)
      .attr('y2', padrao.centroY+ly2)
      .attr('stroke',cor)
      .attr('marker-start', 'url(#triangle-start)');
}

function reta(svg,x,y,l,a,cor) {
  svg.append('rect')
    .attr('x', x)
    .attr('y', y)
    .attr('width', l)
    .attr('height', a)
    .style('fill',cor);
}

function cruzQuadro(svg,x,y,l,a,cor) {
  var borda = 2;
  reta(svg,x + l / 2,y,borda,a-y,padrao.corVermelho);
  reta(svg,x,y + a / 2,l-x,borda,padrao.corVermelho);
}

function tela(svg)
{ var borda = 0;
  linha(svg,0,0,padrao.largura-borda,0,padrao.corTela);
  linha(svg,0,padrao.altura-borda,padrao.largura-borda,padrao.altura-borda,padrao.corTela);
  linha(svg,0,0,0,padrao.altura-borda,padrao.corTela);
  linha(svg,padrao.largura-borda,0,padrao.largura-borda,padrao.altura-borda,padrao.corTela);
}

function grid(svg)
{
  var escala=10;
  for(var linhas=0;linhas<padrao.largura;linhas+=escala) {
    linha(svg,linhas,0,linhas,padrao.altura,padrao.corOuro);
    }
  for(linhas=0;linhas<padrao.altura;linhas+=escala) {
    linha(svg,0,linhas,padrao.largura,linhas,padrao.corOuro);
    }
}

function limpaQuadro(svg,x,y,l,a,cor) {
  reta(svg,x,y,l,a,cor);
  tela(svg);
  grid(svg);
  cruzQuadro(svg,0,0,l,a,cor);
  }

  return {
  circulo:          circulo,
  circuloCentral:   circuloCentral,
  linha:            linha,
  linhaCentral:     linhaCentral,
  reta:             reta,
  cruzQuadro:       cruzQuadro,
  tela:             tela,
  grid:             grid,
  limpaQuadro:      limpaQuadro

  };

  }]);

});
