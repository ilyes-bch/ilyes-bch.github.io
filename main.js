function fit(){
  if ($(document).width() > 700) {
    $(".nav-right").removeClass("hide");
  } else {
    $(".nav-right").addClass("hide");
  }
}

$(document).ready(function(){
  fit();
  $(window).resize(fit);
  $(".toggle").on("click", function(){
    if($(".nav-right").hasClass("hide")){
      $(".nav-right").removeClass("hide");
    } else {
      $(".nav-right").addClass("hide");
    }
  });
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 40
        }, 1000);
        return false;
      }
    }
  });
});