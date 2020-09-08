jQuery('document').ready(function($){


var menuboton= $('.menu1_imagenes')
var menu= $ ('.menu ul')


    menuboton.click(function(){



if(menu.hasClass('desplegar'){
   menu.removeClass('desplegar');

}else{
menu.addClass('desplegar')
}





})

});
