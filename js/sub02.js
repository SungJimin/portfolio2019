//sub02.js
//넥스트버튼을 누르면 work의 마진값으로 조절 50% -790px    100% -1580px
// css 글씨 show hide 시키고
                //  동시에 projt의 후손 color도 마진값으로 조절된다 -410px
$(function(){
    var $btn = $('.gallery .btn'),
        $work = $('.gallery .workWrap'),
        $pro = $('main .projt')
        $project = $('.projt .prjtIntro'),
        $color = $('.projt .prjtLink'),
        $slideN = $('.prjtIntro .numGroup'),
        $slidePN = $('.prjtIntro .pjtName'),
        $slideDt = $('.prjtIntro .pjtDate'),
        $slidePP = $('.prjtIntro .pjtPlan'),
        $slidePD = $('.prjtIntro .pjtDsgn'),
        $slidePC = $('.prjtIntro .pjtCord'),
        $slideB = $('.prjtIntro .stLink');

    $btn.on('click',function(){
        gallery();
        project();
    });
    function gallery(){
        $work.animate({marginLeft : -790},700,function(){
            $color.animate({marginLeft : -410},700,function(){
                $color.css({marginLeft : 0});
                $color.find('.color:first').appendTo($color);
            });

            $work.animate({marginLeft : -1580},700,function(){
                $work.css({marginLeft:0});
                $work.find('.work:first').appendTo($work);
            });
        });
    };
    function project(){
        $slideN.find('li:first').animate({marginTop : -40}, {
            done : function(){
                $(this).appendTo($slideN).css({marginTop : 0});
            }
        });
        $slidePN.find('h4:first').animate({marginTop : -40}, {
            done : function(){
                $(this).appendTo($slidePN).css({marginTop : 0});
            }
        });
        $slideDt.find('li:first').animate({marginTop : -30}, {
            done : function(){
                $(this).appendTo($slideDt).css({marginTop : 0});
            }
        });
        $slidePP.find('li:first').animate({marginTop : -30}, {
            done : function(){
                $(this).appendTo($slidePP).css({marginTop : 0});
            }});
        $slidePD.find('li:first').animate({marginTop : -30}, {
            done : function(){
                $(this).appendTo($slidePD).css({marginTop : 0});
            }
        });
        $slidePC.find('li:first').animate({marginTop : -30}, {
            done : function(){
                $(this).appendTo($slidePC).css({marginTop : 0});
            }});
        $slideB.find('h4:first').animate({marginTop : -40}, {
            done : function(){
                $(this).appendTo($slideB).css({marginTop : 0});
            }
        });
    };



    // function project(){
    //     $project.css({marginLeft : -410},function(){
    //         $(this).animate({opacity : 1});
    //     })
    // }

});
