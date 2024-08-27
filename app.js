function criptografar() {
    let mensagem = document.getElementById("mensagem").value;
    mensagem = mensagem
        .replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("a", "ai")
        .replaceAll("o", "ober")
        .replaceAll("u", "ufat");
        ajustarMensagemRetorno(mensagem);
        
    resultado = document.getElementById("resultado").innerHTML = mensagem;
}

function descriptografar() {
    mensagem = document.getElementById("mensagem").value;
    mensagem = mensagem
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ai", "a")
        .replaceAll("ober", "o")
        .replaceAll("ufat", "u");
        ajustarMensagemRetorno(mensagem);
        
    resultado = document.getElementById("resultado").innerHTML = mensagem;
}


function ajustarMensagemRetorno(mensagem){
    if(mensagem != null && mensagem != undefined && mensagem != ''){
        let divImagem = document.getElementById('imagem')
        let botaoCopiar = document.getElementById('botaoCopiar')
        let resultado = document.getElementById('resultado')
        divImagem.style.display = 'none'
        botaoCopiar.style.display = 'flex'
        resultado.style.display = 'block'
    }
}


function copiar() {
    let resultado = document.getElementById("resultado").innerText;
    navigator.clipboard.writeText(resultado);
    let botaoCopiar = document.getElementById("botaoCopiar");
    if(resultado != ''){
        botaoCopiar.innerHTML = 'Copiado!';
        setTimeout(() => {
            botaoCopiar.innerHTML = 'Copiar';
        }, 1000);
    }else{
        botaoCopiar.innerHTML = 'Não há nada para copiar!';
        setTimeout(() => {
            botaoCopiar.innerHTML = 'Copiar';
        }, 2000);
    }
    

}
const textarea = document.getElementById('mensagem');

textarea.addEventListener('input', function() {
    // Remove caracteres que não são letras minúsculas (a-z), números (0-9), ou espaço (Unicode)
    this.value = this.value.replace(/[^\u0061-\u007A\u0030-\u0039\u0020]/g, '');
});

