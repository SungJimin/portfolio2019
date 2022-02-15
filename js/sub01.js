// sub01.js
$(function(){

var $page = $('.pageWrap .page'),
    scrollEvent = false,
    delta = 0,
    pageNum = 0,
    lastPage = 5,
    pageHeight = 680,
    $box = $('.p06 .boxGroup article'),
    $slider = $('section .imgGroup'),
    boxShow = {display : 'flex'},
    boxHide = {display : 'none'},
    i = 0,
    $pageNumS = $('.etc .pageNum span'),
    $topBtn = $('.topBtn');
////////////////////////// RECOMMEND //////////////////////////////////
$slider.find('div:last').prependTo($slider);
$slider.find('div:last').prependTo($slider);

$('.btNext').on('click', nextSlide);
function nextSlide(){
    $slider.find('div').css({margin : '0 10px'});
    $slider.find('div:eq(3)').css({marginLeft : 270});
    $slider.animate({marginLeft : -420 + -270 }, {
            done : function(){
                $slider.find('div:first').appendTo($slider);
                $slider.css({marginLeft : -420});
                nextImg();
            }
        });
}
function nextImg(){
    i = (i + 1)%6;
    $box.css(boxHide);
    $box.eq(i).css(boxShow);
}

$('.btPrev').on('click', function(){
    $slider.find('div').css({margin : '0 10px'});
    $slider.find('div:eq(2)').css({marginLeft : 270});

    $slider.animate({marginLeft : -420 + 270},{
        done : function(){
            $slider.css({marginLeft : -420});
            $slider.find('div:last').prependTo($slider);
            i = (i + 5)%6;
            $box.css(boxHide);
            $box.eq(i).css(boxShow);
        }
    });

});
////////////////////////// technical skills //////////////////////////////////

function skills(){
    $('.p02 article').each(function(i){
    var j = $('.p02 .pannel p').eq(i).text(), // %값이 추출되어 문자형숫자로 표기된다
        degRight = 0,
        degLeft = 180;
    j = parseInt(j);
    $('.p02 .pannel p').eq(i).text('0%');

    $({percent:0}).delay(500).animate({percent : j}, {
        duration : 1000,
        progress : function(){
            var now = parseInt(this.percent), //percent : 숫자값을 증가하게 하는 속성
                deg = now * 360 / 100; //환산식
            degRight = Math.min(180, deg);
            degLeft = Math.max(180, deg);
            $('.p02 .pannel p').eq(i).text(now +'%');
            $('.p02 .right li').eq(i).css({
                transform : 'rotate('+degRight+'deg)'
            });
            $('.p02 .left li').eq(i).css({
                transform : 'rotate('+degLeft+'deg)'
            });
        }
    });
});
}
////////////////////////// background animate //////////////////////////
function p1(){
    $('.p01 .fr').css({right: 130});
}
function p4(){
    $('.p04 .gallWrap div').fadeIn(2000);
    $('.p04 .circle').delay(500).css({right : 290});
}
////////////////////////// wheel page //////////////////////////////////
$(window).on('resize', resizePage);
$(window).on('mousewheel', wheelPage);



function resizePage(){
    pageHeight = $page.outerHeight();
}


////////////////////////////TweenMax////////////////////////////////////////////////////////
var $br = $('.bgWrap .red'),
    $bp = $('.bgWrap .pink'),
    rdProp = [{
        width:1080, height: 1080, top: -200, bottom: -200, left:-210, right:330
    }, {
        width:2000, height: 2000, top:-1400, bottom: 80, left: -400, right:-400
    }, {
        width:0 , height: 0
    }, {
        width:0 , height: 0
    }, {
        width:0 , height: 0
    }, {
        width:480 , height: 480 , top: -200, bottom: 400, left: -90,  right : 810
    } ],
    pkProp = [{
        width:440 , height: 440 , top: 120, bottom: 120, right:-100, left:860
    }, {
        width:0, height: 0
    }, {
        width:2000, height: 2000, top: -1560, bottom: 240, left: -240, right:-200
    }, {
        width:0 , height: 0
    }, {
        width:1080 , height: 1080 , top: -200, bottom: -200, right: -170, left : 290
    }, {
        width:560 , height: 560 ,top: 220 ,bottom: -40, right: -50, left:690
    }];
$(window).on('load',function(){
    p1();
})

function wheelPage(e){
    delta = e.originalEvent.wheelDelta;
    if(delta<0 && scrollEvent == false && pageNum < lastPage){
        nextPage();
    }else if(delta>0 && scrollEvent == false && pageNum > 0){
        prevPage();
    }
    if(pageNum == 0){
        p1();
    }
    if(pageNum == 1){
        skills();
    }
    if(pageNum == 3){
        p4();
    }else{
        $('.p04 .circle').css({right : 1300});
        $('.p04 .gallWrap div').fadeOut();
    }
    if(pageNum == 5){
      $('.scrani').fadeOut();
      $topBtn.fadeIn();
    }else{
      $('.scrani').fadeIn();
      $topBtn.fadeOut();
    }
}

function nextPage(){
    scrollEvent = true;
    //pageNum은 6을 초과할 수 없다.
    if(pageNum < 6)pageNum++;
    movepage();
    $pageNumS.text(pageNum+1);
}

function prevPage(){
    scrollEvent = true;
    if(pageNum > 0)pageNum--;
    movepage();
    $pageNumS.text(pageNum+1);
}
function movepage(){
    $('.pageWrap').stop().delay(100).animate({marginTop : -pageHeight * pageNum}, {
        duration : 700,
        easing : 'easeInOutExpo',
        done : function(){
            scrollEvent = false;
        }
    });
    console.log(pageNum);
    $br.animate(rdProp[pageNum],1000);
    $bp.animate(pkProp[pageNum],1000);
}


});
