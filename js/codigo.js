$(document).ready(

    function () {

        deslizar($('#inicio'), $('#inicio .efecto'));

        $(window).scroll(

            function () {

                deslizar($('#inicio'), $('#inicio .efecto'));
                deslizar($('#seccion1'), $('#seccion1 .efecto'));
                deslizar($('#albumes'), $('#albumes .efecto'));
                deslizar($('#album2'), $('#album2 .efecto'));
                deslizar($('#formulario'), $('#formulario .efecto'));

                efecto_parallax($('#inicio'), 0.3);
                efecto_parallax($('#seccion1'), 0.3);
                efecto_parallax($('#albumes'), 0.3);
                efecto_parallax($('#album2'), 0.3);
                efecto_parallax($('#formulario'), 0.3);
            }
        )
    }
);

function deslizar(padre, hijo) {

    hijo.each(
        function () {

            var scroll = padre.offset().top - $(window).scrollTop();

            var elemento = $(this);
            var restablecer = "";
            var ocultar = "";

            if (elemento.hasClass('e-right')) {
                restablecer = { right: '0px', filter: 'opacity(100%)' };
                ocultar = { right: '-100px', filter: 'opacity(0%)' };
            }

            if (elemento.hasClass('e-left')) {
                restablecer = { left: '0px', filter: 'opacity(100%)' };
                ocultar = { left: '-100px', filter: 'opacity(0%)' };
            }

            if (elemento.hasClass('e-top')) {
                restablecer = { top: '0px', filter: 'opacity(100%)' };
                ocultar = { top: '-100px', filter: 'opacity(0%)' };
            }

            if (elemento.hasClass('e-bottom')) {
                restablecer = { bottom: '0px', filter: 'opacity(100%)' };
                ocultar = { bottom: '-100px', filter: 'opacity(0%)' };
            }
            if (scroll <= 300 && scroll >= -300) {
                elemento.css(restablecer);
            }
            else {
                elemento.css(ocultar);
            }
        }
    );
}

function efecto_parallax(div, speed) {

    var diff = $(window).scrollTop() - div.offset().top;
    var pos_y = -(diff * speed);
    var  coordenadas = '0 ' + pos_y + 'px'
    div.css({'background-position': coordenadas});
}   