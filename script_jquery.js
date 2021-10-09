$(function(){
    //verifica se todo o documento foi carregado.
    
    $('#azul').click(function(){
        //primeiro o seletor, onde ocorrerá a tal ação..  e a própria ação dita.
        $('#t1').css("background-color", "blue")
                .fadeOut()
                .delay(1000)//microsegundos
                .fadeIn(5000);//fadein 'fast', pode colocar a duração em microsegundos
        

    });
    
    $('#vermelho').click(function(){
        $('h1').css("background-color", "red");
        $('#mensagem').text("Cor alterada com sucesso")
                      
                      .css({color:'red', 
                            border:'1px solid red',
                            backgrounColor:'green'})
                      .fadeOut(2000)
                      .addClass('green')
        $('button').removeClass('red');



    });



});