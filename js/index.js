var etapaAtual = 1;
function mudarEtapa(valor){
    if((valor > 0 && etapaAtual <3) || 
    (valor < 0 && etapaAtual > 1 )){
        $('#etapa'+etapaAtual).css('display', 'none');
        etapaAtual += valor;
        $('#etapa'+etapaAtual).css('display', 'block');
    }
}