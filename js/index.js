$(".button-collapse").sideNav();

$(document).ready(function(){
    $('.scrollspy').scrollSpy();
    $('ul.tabs').tabs();
  });

$(window).scroll(function() {
	if ($(".navbar").offset().top > 50) {
        $(".custom").addClass("custom2");
    } else {
        $(".custom").removeClass("custom2");
    }
})