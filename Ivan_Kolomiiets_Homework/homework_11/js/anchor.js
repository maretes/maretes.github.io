// $(document).ready(function() {
//     $('a[href^="#"]').click(function(){
//         var el = $(this).attr('href');
//         $('body').animate({
//             scrollTop: $(el).offset().top}, 2000);
//         return false;
//     });
// });
$(document).ready(function() {
    $("a.scrollto").click(function() {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 800);
        return false;
    });
});