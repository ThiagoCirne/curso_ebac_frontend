const form = document.getElementById('cadastro');
const campoA = document.getElementById('campo-a');
const campoB = document.getElementById('campo-b');
const mensagemSucesso = "Informações validadas com sucesso";
const mensagemErrada =  "Campo-B é menor que Campo-A";
let formEValido = false;

function validaCampo(campoA, campoB) {
    const campoAValue = campoA.value;
    const campoBValue = campoB.value;
    return campoBValue > campoAValue;
    
}

form.addEventListener('submit', function(e) {
    e.preventDefault();    


    formEValido = validaCampo(campoA, campoB)
    if(formEValido) {
        const containerMensagemSusesso = document.querySelector('.mensagem-sucesso');/*estamos criando uma constante com esses dados para ser for verdade*/
        containerMensagemSusesso.innerHTML =  mensagemSucesso;
        containerMensagemSusesso.style.display = 'block';
        document.querySelector('.mensagem-erro').style.display = 'none';
        document.querySelector('.mensagem-erro').style.border = 'none';        
        campoA.value = '';
        campoB.value = '';
    }
        
    else {
        
        const containerMensagemErro = document.querySelector('.mensagem-erro');
        document.querySelector('.mensagem-sucesso').style.display = 'none';
        containerMensagemErro.innerHTML = mensagemErrada;
        containerMensagemErro.style.display = 'block';
        campoB.style.border = '1px solid red';
    }
});    


    

