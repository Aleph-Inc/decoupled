$(document).ready(function() {
  $(".endorsements").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    responsiveClass: true,
    dots: true,

    responsive: {
      0: {
        items: 1
      },
      992: {
        items: 3
      },
      1440: {
        items: 3
      }
    }
  });

  $(".partners").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    responsiveClass: true,
    dots: true,

    responsive: {
      0: {
        items: 4
      },

      767: {
        items: 4
      },

      992: {
        items: 8
      }
    }
  });

  $(".video-embed").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    responsiveClass: true,
    items: 1
  });
});

function clickitem() {
  var x = document.getElementById("navbarSupportedContent");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

$(function($) {
  var $navbar = $(".go--header");
  $(window).scroll(function(event) {
    var $current = $(this).scrollTop();
    if ($current > 0) {
      $navbar.addClass("navbar-color");
      //$("#navbar").css({'display': 'none'});
    } else {
      $navbar.removeClass("navbar-color");
      //$("#navbar").css({'display': 'flex'});
    }
  });
});
