$(document).ready(function() {
    $('.portfolio_bt-menu li a').click(function() {
        $('.portfolio_bt-menu li').removeClass('selected');
        $(this).parent('li').addClass('selected');
        imgWidth = '30%';
        thisItem = $(this).attr('rel');
        if(thisItem != "all") {
            $('.item li[rel='+thisItem+']').stop()
                .animate({'max-width' : imgWidth,
                    'opacity' : 1,
                });
            $('.item li[rel!='+thisItem+']').stop()
                .animate({'max-width' : 0,
                    'opacity' : 0,
                });
        } else {
            $('.item li').stop()
                .animate({'opacity' : 1,
                    'max-width' : imgWidth,
                });
        }
    })
    $('.item li img').animate({'opacity' : 0.5}).hover(function() {
        $(this).animate({'opacity' : 1});
    }, function() {
        $(this).animate({'opacity' : 0.5});
    });
});