$(document).ready(function() {
    $('#carrossel-imagens').slick({
        autoplay: true,
    });
    /*funçao para ao clicar no icone, aparecer ou recolher*/
    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(DDD)Telefone'
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
            mensagem: {
                required: true,
            },
            veiculoDeInteresse: {
                required: false,
            }

        },  /*mensagens personalizados quando nao completarmos os inputs*/
            messages: {
                nome: 'Por favor insira o seu nome',
                telefone: 'Digite seu numero de telefone',
                email: 'Digite o seu email'
        },
        submitHandler: function(form) {
            console.log(form)
        }, 
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos Incorretos`)
            }
        }
    
    })

    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();
        /*esta procurando dentro da li pai, um h3 e o seu texto e esta preenchendo no campo id veiculo-interesse o valor do h3*/
        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })

})