$(document).ready(function () {

  $("#test").click(function() {
    $('html, body').animate({
        scrollTop: $("#angebot").offset().top
    }, 2000);
});

// impressum //

    $('.togglelink').click(function() {
        var totoggle = $(this).attr("data-toggle");
        $(totoggle).slideToggle(500);

        if ($(totoggle).is(":visible")) {
            $('html,body').animate({scrollTop:$(totoggle).offset().top}, 1000);
        }
    });

});
