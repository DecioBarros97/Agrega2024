$(function () {

    //CONTROLE DO MENU MOBILE
    $('.mobile_action').click(function () {
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
            $('.main_header_nav').animate({ 'left': '0px' }, 500);
        } else {
            $(this).removeClass('active');
            $('.main_header_nav').animate({ 'left': '-100%' }, 500);
        }
    });

    //HEADER
    $(window).scroll(function () {

        if ($(this).scrollTop() > 0) {

            if (!$('.main_header').hasClass('fixed')) {
                $('.main_header').stop().addClass('fixed');
            }

        } else {

            $('.main_header').removeClass('fixed');

        }
    });

    //Scroll Ancora
    var $doc = $('html, body');
    $('.scrollSuave').click(function () {
        $doc.animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 100
        }, 100);
        return false;
    });
    //Scroll Ancora

    //Menu Ativo
    /*     $(function(){
    
            var links  = $("#top a");
    
            $(window).scroll(function(){
                var topScroll = $(window).scrollTop();
                links.each(function(){
                   var href       = $(this).attr('href');
                   var el         = $(href);
                   var posSection = el.offset().top -101 ;
                   var hSection   = el.height();
    
                    if(posSection <= topScroll && (posSection + hSection) > topScroll){
                        links.removeClass('menuAtivo')
                        $(this).addClass('menuAtivo');
                    }else{
                        $(this).removeClass("menuAtivo");
                    }
                });
            });
    
        }); */
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('menuAtivo');

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('meunuAtivo [href*=' + id + ']').classList.add('active');
                });
            };
        });

        let header = document.querySelector('header');

        header.classList.toggle('sticky', window.screenY > 100);

        /* remove toggle icon and navbar when click navbar Link (scroll)*/
        /* remova o lista de alternância e a barra de navegação ao clicar no link da barra de navegação (rolagem) */

        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');

    };
    //Menu Ativo

    //Magnific Popup
    $('.galeria').magnificPopup({
        type: 'image',
        delegate: 'a',

        gallery: { enabled: true },
        callbacks: {

            buildControls: function () {

                this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
            }

        }
    });

});


/*Perguntas Frequentes*/
$(document).ready(function () {

    $('#toggle-item li').click(function () {

        var text = $(this).find('p');

        if (text.is(':hidden')) {
            text.slideDown('220');
            $(this).find('span').html('<i class="icon icon-minus-square"></i>');
        } else {
            text.slideUp('220');
            $(this).find('span').html('<i class="icon icon-plus-square"></i>');
        }

    });

});