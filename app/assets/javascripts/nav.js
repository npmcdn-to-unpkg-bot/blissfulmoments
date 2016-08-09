// Generated by CoffeeScript 1.10.0
$(document).on('turbolinks:load', function() {
  var featuredBottom;
  if (top.location.pathname === '/') {
    featuredBottom = $('.featured').offset().top + $('.featured').height() - $('.topnav').height();
    $(window).resize(function() {
      return featuredBottom = $('.featured').offset().top + $('.featured').height() - $('.topnav').height();
    });
    $('.topnav-main').hide();
    $('.topnav-featured').show();
    $(window).scroll(function() {
      var windowTop;
      windowTop = Math.round($(window).scrollTop());
      if (windowTop < featuredBottom) {
        $('.topnav-main').fadeOut(500);
        $('.topnav-featured').fadeIn(500);
      }
      if (windowTop >= featuredBottom) {
        $('.topnav-featured').fadeOut(500);
        return $('.topnav-main').fadeIn(500);
      }
    });
  } else {
    $('.topnav-featured').hide();
    $('.topnav-main').show();
  }
  $('.open-sidenav').click(function() {
    $('.sidenav-mask').addClass('is-active');
    return $('.sidenav').css('width', '250px');
  });
  $('.close-sidenav').click(function() {
    $('.sidenav-mask').removeClass('is-active');
    return $('.sidenav').css('width', '0');
  });
  return $(window).resize(function() {
    if (window.matchMedia('(min-width: 992px)').matches) {
      $('.sidenav-mask').removeClass('is-active');
      return $('.sidenav').css('width', '0');
    }
  });
});

$(document).on('turbolinks:before-cache', function() {
  $('.sidenav-mask').removeClass('is-active');
  return $('.sidenav').css('width', '0');
});
