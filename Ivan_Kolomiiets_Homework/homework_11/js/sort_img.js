$(document).ready(function() {
    $('.menu li a').click(function() {
        $('.menu li').removeClass('selected');
        $(this).parent('li').addClass('selected');
        imgWidth = '400px';
        thisItem = $(this).attr('rel');
        if(thisItem != "all") {
            $('.item li[rel='+thisItem+']').stop()
                .animate({'width' : imgWidth,
                    'opacity' : 1,
                });
            $('.item li[rel!='+thisItem+']').stop()
                .animate({'width' : 0,
                    'opacity' : 0,
                });
        } else {
            $('.item li').stop()
                .animate({'opacity' : 1,
                    'width' : imgWidth,
                });
        }
    })
    $('.item li img').animate({'opacity' : 0.5}).hover(function() {
        $(this).animate({'opacity' : 1});
    }, function() {
        $(this).animate({'opacity' : 0.5});
    });
});