$(document).ready(function() {

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(DDD)12345-6789'
    })

    $('#cpf').mask('000.000.000-00',{
        placeholder: '123.456.789-00'
    })
        
    

    $('#cep').mask('00000-000', {
        placeholder: '00000-000'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }

        },
            messages: {
                nome: 'Por favor, informe o seu nome',
                telefone: 'Digite o numero do seu telefone',
                email: 'Digite o seu endereço de email',
                cpf: 'Digite os 11 digitos do seu CPF',
                endereco: 'Digite o seu endereço',
                cep: 'Digite o cep da sua rua'
            },
            submitHandler: function(form) {
                $('#nome').val('');
                $('#email').val('');
                $('#cpf').val('');
                $('#endereco').val('');
                $('#cep').val('');
                $('#telefone').val('');
            }, 
            invalidHandler: function(evento, validador) {
                let camposIncorretos = validador.numberOfInvalids();
                if (camposIncorretos) {
                    alert(`Existem ${camposIncorretos} campos Incorretos`)
                }
            }
    
    
    })
    
        
        
})

