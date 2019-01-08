function scrollToAnchor(id) {
    var aTag = $("a[name='" + id + "']");
    $('html,body').animate({scrollTop: aTag.offset().top}, 'slow');
}
$("#anchor").click(function () {
    scrollToAnchor('id1');
});
$("#about").click(function () {
    scrollToAnchor('id1');
});
$("#services").click(function () {
    scrollToAnchor('id2');
});
$("#history").click(function () {
    scrollToAnchor('id3');
});
$("#team").click(function () {
    scrollToAnchor('id4');
});
$("#portfolio ").click(function () {
    scrollToAnchor('id5');
});
$("#prices").click(function () {
    scrollToAnchor('id6');
});
$("#blog").click(function () {
    scrollToAnchor('id7');
});
$("#contact").click(function () {
    scrollToAnchor('id8');
});
$("#portfolios").click(function () {
    scrollToAnchor('id6');
});
$("#contacts").click(function () {
    scrollToAnchor('id8');
});
