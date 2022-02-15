// index.js
$(function(){

    var $span = $('.main .mainTxt span');
    TweenMax.staggerTo($span.not('.typo2>span'),1, {
        stagger:0.17,
        visibility:'visible'
    });
    function point(){
        console.log('df');
        TweenMax.from($('.typo2>span'), 0.9, {
            delay : 0.15,
            x:-2000,
            y:-1000
        });
    }
    point();
});
