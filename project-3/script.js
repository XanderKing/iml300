$(document).ready(function () {   
    $('.flower').click(function () {
      $('.paragraph').toggle();
    });
    
     $('#img1').click(function () {
//        $('.infopanel').toggle(2000);     
        $(this).toggleClass("bigger");
    });

//     $('#img').hover(function () {
//     $('#img').fadeOut();
//    }, function () {
//        $('#img').fadeIn();
//    });

$(function () {
    $("#img").draggable();
});   
    
});


