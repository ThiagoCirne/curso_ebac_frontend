$(document).ready(function() {

$('form').on('submit', function(e) {
    e.preventDefault();
    const novaAtividade = $('#atividade').val();
    const adicionarAtividade = $('<li></li>');
    

    $(`<li>${novaAtividade}</li>`).appendTo(adicionarAtividade);
    $(adicionarAtividade).appendTo('ul');
    $('#atividade').val('')
            
    
    $("li").on('click', function(){             
            $(this).css("text-decoration", "line-through");
        })  
    });
    
})




/*$(novaAtividade).appendTo(adicionarAtividade);*/