document.addEventListener('DOMContentLoaded', function () {
    const botaoAcessibilidade = document.getElementById('botao-acessibilidade');
    const opçoesDeAcessibilidade = document.getElementById('opçoes-acessibilidade');

    botaoAcessibilidade.addEventListener('click', function(){
        botaoAcessibilidade.classList.toggle('rotacao-botao');
        opçoesDeAcessibilidade.classList.toggle('apresenta-lista');
    })
    
    let tamanhoAtualFonte = 1;

    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');

    aumentaFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte +=0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`
    })
    diminuiFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte -=0.2;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`
    })
})