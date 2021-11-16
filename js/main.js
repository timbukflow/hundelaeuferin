$(document).ready(function () {

  $("#test").click(function() {
    $('html, body').animate({
        scrollTop: $("#angebot").offset().top
    }, 2000);
});

});
