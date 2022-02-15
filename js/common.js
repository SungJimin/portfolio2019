// common.js
$(function(){
    var $contactBtn = $('.hdrWrap .contact'),
        $close = $('.modalWrap .close'),
        navList;

    $($contactBtn).on('click',function(){    //contact modal display
        $('.modalWrap').css({display : "block"});
    });
    $($close).on('click',function(){
        $('.modalWrap').css({display : "none"});
    });

    $('.hdrWrap .nav li').on('click',function(){
        $('.hdrWrap .nav li').removeClass('clicked');
        $(this).addClass('clicked');
    });
});
