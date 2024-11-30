import '../css/all.css';
import '../css/navstyle.css';

$(function () {
  var front_bar;
  var back_bar;
  var other_bar;
  addbar(front_bar, '.bar-front');
 
  function FrontClick() {
    $('.front-end').removeClass('visibility');
    $('.back-end').addClass('visibility');
    $('.Other').addClass('visibility');
    addbar(front_bar, '.bar-front');
    cleanbar(back_bar, '.bar-back');
    cleanbar(other_bar, '.bar-other');
  }
  window.FrontClick = FrontClick;
  function BackClick() {
    $('.front-end').addClass('visibility');
    $('.back-end').removeClass('visibility');
    $('.back-end').removeClass('visibility');
    $('.Other').addClass('visibility');
    addbar(back_bar, '.bar-back');
    cleanbar(front_bar, '.bar-front');
    cleanbar(other_bar, '.bar-other');
  }
  window.BackClick = BackClick;
  function OtherClick() {
    $('.front-end').addClass('visibility');
    $('.back-end').addClass('visibility');
    // $('.Other').removeClass('visibility');
    $('.Other').removeClass('visibility');
    addbar(other_bar, '.bar-other');
    cleanbar(front_bar, '.bar-front');
    cleanbar(back_bar, '.bar-back');
  }
  window.OtherClick = OtherClick;

  function addbar(bars, classname) {
  
    bars = [].slice.call(document.querySelectorAll(classname));
    bars.map(function (bar, index) {
      setTimeout(function () {
        bar.style.width = bar.dataset.percent;
      }, index * 200);
    });
  }
  function cleanbar(bars, classname) {
    bars = [].slice.call(document.querySelectorAll(classname));
    bars.map(function (bar, index) {
      setTimeout(function () {
        bar.style.width = "0%";
      }, index);
    });
  }
})

$(function () {

  $(window).scroll(function () {
    var scrollVal = $(this).scrollTop();
    if (scrollVal >= 1000) {
      $('.myExperience').addClass(".w3-container w3-animate-bottom");
    }
    if (scrollVal >= 1400) {
      $('.myskill').removeClass("visibility");
      $('.myskill').addClass(".w3-container w3-animate-bottom");
    }
  });


  $('a[href*=#]:not([href=#])').click(function () {
    var target = $(this.hash);
    $('html,body').animate({
      scrollTop: target.offset().top
    }, 800);
    return false;
  });
});



$(document).ready(function () {
  $(".menu-icon").on("click", function () {
    $("nav ul").toggleClass("showing");
  });
});
// Scrolling Effect
$(window).on("scroll", function () {
  if ($(window).scrollTop()) {
    $('nav').addClass('black');
  }

  else {
    $('nav').removeClass('black');
  }
})