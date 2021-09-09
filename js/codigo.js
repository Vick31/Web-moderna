$(document).ready(

    function () {

        $padre = $('#inicio');
        $hijo = $('#inicio .efecto');

        $hijo.each(
            function() {
                var elemento = $(this); 

                if(elemento.hasClass('e-right')) {
                    elemento.css({right:'0px', filter: 'opacity(100%)'});                
                }

                if(elemento.hasClass('e-left')) {
                    elemento.css({left:'0px', filter: 'opacity(100%)'});                
                }

                if(elemento.hasClass('e-top')) {
                    elemento.css({top:'0px', filter: 'opacity(100%)'});                
                }

                if(elemento.hasClass('e-bottom')) {
                    elemento.css({bottom:'0px', filter: 'opacity(100%)'});                
                }
            }
        );

    }

);