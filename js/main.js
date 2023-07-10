$(document).ready(function () {

  $(".goto").click(function() {
    $('html, body').animate({
        scrollTop: $("#angebot").offset().top
    }, 2000);
});

// impressum //

  $('.impressum').click(function() {
    var $target = $($(this).data("target"));
    $target.slideToggle(500, function() {
        if ($target.is(":visible")) {
            $('html,body').animate({scrollTop: $target.offset().top}, 1000);
        }
    });
  });

});
