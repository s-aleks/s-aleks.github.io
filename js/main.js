// Scroll
if ($(window).width() > 768){
  // Cache selectors
  var lastId,
  topMenu = $(".navbar__nav"),
  topMenuHeight = topMenu.outerHeight() + 14,
  // All list items
  menuItems = topMenu.find("a"),
  // Anchors corresponding to menu items
  scrollItems = menuItems.map(function() {
    var item = $($(this).attr("href"));
    if (item.length) {
      return item;
    }
  });

  // Bind click handler to menu items
  // so we can get a fancy scroll animation
  menuItems.click(function(e) {
  var href = $(this).attr("href"),
    offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
  $('html, body').stop().animate({
    scrollTop: offsetTop
  }, 300);
  e.preventDefault();
  });

  // Bind to scroll
  $(window).scroll(function() {
  // Get container scroll position
  var fromTop = $(this).scrollTop() + topMenuHeight;

  // Get id of current scroll item
  var cur = scrollItems.map(function() {
    if ($(this).offset().top < fromTop)
      return this;
  });
  // Get the id of the current element
  cur = cur[cur.length - 1];
  var id = cur && cur.length ? cur[0].id : "";

  if (lastId !== id) {
    lastId = id;
    // Set/remove active class
    menuItems
      .parent().removeClass("active")
      .end().filter("[href='#" + id + "']").parent().addClass("active");
    }
  });
}else{
  //scroll mob
  // Cache selectors
  var lastId,
  topMenu = $(".navbar__nav1"),
  topMenuHeight = topMenu.outerHeight() - 200,
  // All list items
  menuItems = topMenu.find("a"),
  // Anchors corresponding to menu items
  scrollItems = menuItems.map(function() {
    var item = $($(this).attr("href"));
    if (item.length) {
      return item;
    }
  });

  // Bind click handler to menu items
  // so we can get a fancy scroll animation
  menuItems.click(function(e) {
  var href = $(this).attr("href"),
    offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight;
  $('html, body').stop().animate({
    scrollTop: offsetTop
  }, 300);
  e.preventDefault();
  });

  // Bind to scroll
  $(window).scroll(function() {
  // Get container scroll position
  var fromTop = $(this).scrollTop() + topMenuHeight;

  // Get id of current scroll item
  var cur = scrollItems.map(function() {
    if ($(this).offset().top < fromTop)
      return this;
  });
  // Get the id of the current element
  cur = cur[cur.length - 1];
  var id = cur && cur.length ? cur[0].id : "";

  if (lastId !== id) {
    lastId = id;
    // Set/remove active class
    menuItems
      .parent().removeClass("active")
      .end().filter("[href='#" + id + "']").parent().addClass("active");
    }
  });
}

if ($(window).width() > 768){
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".navbar").addClass("scroll")
    }else if ($(this).scrollTop() == 0){
      $(".navbar").removeClass("scroll")
    }
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > $(".header__left_icon").offset().top) {
      $(".navbar-brand").css("display", "none")
      $(".navbar__left_icon").css("display", "flex")
    }else if ($(this).scrollTop() < $(".header__left_icon").offset().top){
      $(".navbar-brand").css("display", "block")
      $(".navbar__left_icon").css("display", "none")
    }
  });
}else{
  $(".navbar").addClass("scroll")
}

$('.nav-menu-wrap').click(function(){
  if ($('.navbar__nav').hasClass('open')){
    $('.navbar__nav').removeClass('open');
    $('.nav-menu').css({
      'transform':'rotate(0deg)'
    });
  }else{
    $('.navbar__nav').toggleClass('open');
    $('.nav-menu').css({
      'transform':'rotate(90deg)'
    });
  }
});

$('.nav_item').click(function(){
  $('.navbar__nav').removeClass('open');
  $('.nav-menu').css({
    'transform':'rotate(00deg)'
  });
});


$(document).ready(function(){
  $(".header__link-work").on("click", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 300);
  });
});





//portfolio
$('#portfolio-btn').click(function(e){
  $(this).toggleClass('active');
  if ($(this).hasClass('active')) {
    $('.portfolio__wrap:nth-child(4), .portfolio__wrap:nth-child(5)').css({
      'display': 'flex'
    });
    $(this).html('Скрыть').css({
      'width':'161px',
      'border-radius':'5px 5px 0px 0px',
      'margin-bottom':'0'
    });
  }
  else {
    $('.portfolio__wrap:nth-child(4), .portfolio__wrap:nth-child(5)').css({
      'display':'none'
    });
    $(this).html('Показать больше').css({
    'width':'245px',
    'border-radius':'0px 0px 5px 5px',
    'margin-bottom':'-40px'
    });
  }
});


// slider portfolio 
if ($(window).width() > 649){
  var slideNow = 1;
  var slideCount = 3;
  var translateWidth = 0;

  $('.portfolio .slide-left').click(function(){
    prevSlide();
  });
  $('.portfolio .slide-right').click(function(){
    nextSlide();
  });
  $(".portfolio").swipe({
    swipeLeft:function() {
      nextSlide();
    },
    swipeRight:function() {
      prevSlide();
    }
  });

  function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {  
      slideNow = 3; 
      $('.slider__control-item').css('background','none');
      $('.slider__control-item:nth-child('+ slideNow +')').css('background','#fff');
    }else{
      translateWidth = -$('.portfolio__slide').width() * (slideNow) * 2;
      $('.portfolio__wrap__slider').css({
          'transform': 'translate(' + translateWidth + 'px, 0)',
          '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
          '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
      });
    
      $('.slider__control-item').css('background','none');
      slideNow++;
      $('.portfolio__slide').css('opacity', '0');
      $('.portfolio__slide:nth-child('+ (slideNow + (slideNow - 1)) +')').animate({'opacity':'1'}, 300);
      $('.portfolio__slide:nth-child('+ (slideNow + slideNow) +')').animate({'opacity':'1'}, 300);
      $('.portfolio__slider_controls-item').css('background','none');
      $('.portfolio__slider_controls-item:nth-child('+slideNow+')').css('background','#56C4E9');

      if (slideNow == 2){
        $('.portfolio .slide-left').css({
          'background': 'url(../img/arrow-slide-right.svg) no-repeat center',
          'transform': 'rotate(180deg)'
        });
      }else if (slideNow == 3){
        $('.portfolio .slide-right').css({
          'background': 'url(../img/arrow-slide-left.svg) no-repeat center',
          'transform': 'rotate(180deg)'
        });
      }
    }
  }

  function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
      slideNow = 1;
    } else {
      translateWidth = -$('.portfolio__slide').width() * (slideNow - 2) * 2;
      $('.portfolio__wrap__slider').css({
        'transform': 'translate(' + translateWidth + 'px, 0)',
        '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
        '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
      });
      slideNow--;
      $('.portfolio__slide').css('opacity', '0');
      $('.portfolio__slide:nth-child('+ (slideNow + (slideNow - 1)) +')').animate({'opacity':'1'}, 300);
      $('.portfolio__slide:nth-child('+ (slideNow + slideNow) +')').animate({'opacity':'1'}, 300);
      
      $('.portfolio__slider_controls-item').css('background','none');
      $('.portfolio__slider_controls-item:nth-child('+slideNow+')').css('background','#56C4E9');

      if (slideNow == 2){
        $('.portfolio .slide-right').css({
          'background': 'url(../img/arrow-slide-right.svg) no-repeat center',
          'transform': 'rotate(360deg)'
        });
      }else if (slideNow == 1){
        $('.portfolio .slide-left').css({
          'background': 'url(../img/arrow-slide-left.svg) no-repeat center',
          'transform': 'rotate(360deg)'
        });
      }
    }
  }
}else if ($(window).width() < 649){
  var slideNow = 1;
  var slideCount = 5;
  var translateWidth = 0;

  $('.portfolio .slide-left').click(function(){
    prevSlide();
  });
  $('.portfolio .slide-right').click(function(){
    nextSlide();
  });
  $(".portfolio").swipe({
    swipeLeft:function() {
      nextSlide();
    },
    swipeRight:function() {
      prevSlide();
    }
  });

  function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {  
      slideNow = 5; 
      $('.slider__control-item').css('background','none');
      $('.slider__control-item:nth-child('+ slideNow +')').css('background','#fff');
    }else{
      translateWidth = -$('.portfolio__slide').width() * (slideNow);
      $('.portfolio__wrap__slider').css({
          'transform': 'translate(' + translateWidth + 'px, 0)',
          '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
          '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
      });
    
      $('.slider__control-item').css('background','none');
      slideNow++;
      $('.portfolio__slide').css('opacity', '0');
      $('.portfolio__slide:nth-child('+ slideNow +')').animate({'opacity':'1'}, 300);
      $('.portfolio__slider_controls-item').css('background','none');
      $('.portfolio__slider_controls-item:nth-child('+slideNow+')').css('background','#56C4E9');

      if (slideNow > 1){
        $('.portfolio .slide-left').css({
          'background': 'url(../img/arrow-slide-right.svg) no-repeat center',
          'transform': 'rotate(180deg)'
        });
      }else if (slideNow == 5){
        $('.portfolio .slide-right').css({
          'background': 'url(../img/arrow-slide-left.svg) no-repeat center',
          'transform': 'rotate(180deg)'
        });
      }
    }
  }


  function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
      slideNow = 1;
    } else {
      translateWidth = -$('.portfolio__slide').width() * (slideNow - 2);
      $('.portfolio__wrap__slider').css({
        'transform': 'translate(' + translateWidth + 'px, 0)',
        '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
        '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
      });
      slideNow--;
      $('.portfolio__slide').css('opacity', '0');
      $('.portfolio__slide:nth-child('+ slideNow +')').animate({'opacity':'1'}, 300);
      $('.portfolio__slider_controls-item').css('background','none');
      $('.portfolio__slider_controls-item:nth-child('+ slideNow +')').css('background','#56C4E9');

      if (slideNow < 5){
        $('.portfolio .slide-right').css({
          'background': 'url(../img/arrow-slide-right.svg) no-repeat center',
          'transform': 'rotate(360deg)'
        });
      }else if (slideNow == 1){
        $('.portfolio .slide-left').css({
          'background': 'url(../img/arrow-slide-left.svg) no-repeat center',
          'transform': 'rotate(360deg)'
        });
      }
    }
  }
}



// slider price
var slideNowPrice = 1;
var slideCountPrice = 2;
var translateWidthPrice = 0;

$('.price .slide-left').click(function(){
  prevSlidePrice();
});
$('.price .slide-right').click(function(){
  nextSlidePrice();
});
$(".price").swipe({
  swipeLeft:function() {
    nextSlidePrice();
  },
  swipeRight:function() {
    prevSlidePrice();
  }
});

function nextSlidePrice() {
  if (slideNowPrice == slideCountPrice || slideNowPrice <= 0 || slideNowPrice > slideCountPrice) {  
    slideNowPrice = 2; 
    $('.slider__control-item').css('background','none');
    $('.slider__control-item:nth-child('+ slideNowPrice +')').css('background','#fff');
  }else{
    translateWidthPrice = -$('.price__item').width() * (slideNowPrice) - 20;
    $('.price__wrap').css({
        'transform': 'translate(' + translateWidthPrice + 'px, 0)',
        '-webkit-transform': 'translate(' + translateWidthPrice + 'px, 0)',
        '-ms-transform': 'translate(' + translateWidthPrice + 'px, 0)',
    });
  
    $('.slider__control-item').css('background','none');
    slideNowPrice++;
    $('.price__item').css('opacity', '0');
    $('.price__item:nth-child('+ slideNowPrice +')').animate({'opacity':'1'}, 500);
    $('.price__item:nth-child('+ (slideNowPrice + 1) +')').animate({'opacity':'1'}, 500);
    $('.price__slider_controls-item').css('background','none');
    $('.price__slider_controls-item:nth-child('+ slideNowPrice +')').css('background','#56C4E9');

    $('.price .slide-left').css({
      'background': 'url(../img/arrow-slide-right.svg) no-repeat center',
      'transform': 'rotate(180deg)'
    });

    $('.price .slide-right').css({
      'background': 'url(../img/arrow-slide-left.svg) no-repeat center',
      'transform': 'rotate(180deg)'
    });
  }
}

function prevSlidePrice() {
  if (slideNowPrice == 1 || slideNowPrice <= 0 || slideNowPrice > slideCountPrice) {
    slideNowPrice = 1;
  } else {
    translateWidthPrice = 0;
    $('.price__wrap').css({
      'transform': 'translate(' + translateWidthPrice + 'px, 0)',
      '-webkit-transform': 'translate(' + translateWidthPrice + 'px, 0)',
      '-ms-transform': 'translate(' + translateWidthPrice + 'px, 0)',
    });
    slideNowPrice--;
    $('.price__item').css('opacity', '0');
    $('.price__item:nth-child('+ slideNowPrice +')').animate({'opacity':'1'}, 500);
    $('.price__item:nth-child('+ (slideNowPrice + 1) +')').animate({'opacity':'1'}, 500);

    
    $('.price__slider_controls-item').css('background','none');
    $('.price__slider_controls-item:nth-child('+slideNowPrice+')').css('background','#56C4E9');


    $('.price .slide-right').css({
      'background': 'url(../img/arrow-slide-right.svg) no-repeat center',
      'transform': 'rotate(360deg)'
    });

    $('.price .slide-left').css({
      'background': 'url(../img/arrow-slide-left.svg) no-repeat center',
      'transform': 'rotate(360deg)'
    });

  }
}

//popup
$('.navbar__nav .main-btn, .header .main-btn, footer .main-btn').click(function(){
  $('.popup-callback').addClass('popup__open')
  $('body').addClass('no-scroll');
});
$('.close').click(function(){
  $('.popup-callback').removeClass('popup__open');
  $('body').removeClass('no-scroll');
});

$('.navbar__nav .main-link, .header .header__link-quest, footer .main-link').click(function(){
  $('.popup-quest').addClass('popup__open');
  event.preventDefault();
});
$('.close').click(function(){
  $('.popup-quest').removeClass('popup__open');
});

//popup portfolio
$('.portfolio__item, .portfolio__slide_item').click(function(){
  itemTitle = $(this).attr('name');
  $('#' + itemTitle).addClass('popup__open');
  $('body').addClass('no-scroll');
  event.preventDefault();

  if ($(window).width() < 768){
    $('.back__wrap p').html('Назад');
    if  ($('.popup-portfolio').hasClass('popup__open')){
      $('.nav-menu-wrap').css('opacity','0');
    }else{
      $('.nav-menu-wrap').css('opacity','1');
    };
  }else{
    $('.back__wrap p').html('Вернуться');
  };

  $('.popup__nav-link').click(function(){
    imgAlt = $(this).children('img').attr('alt');
    imgTitle = $(this).children('img').attr('title')
    $('.layer img').removeClass('layer-active');
    $('.layer img[alt = '+imgAlt+']').addClass('layer-active');
    $('.popup__nav-link').removeClass('active');
    $(this).addClass('active');
    
    $('#' + itemTitle + ' .popup__portfolio-h').html(imgTitle);
  });

  $('.back').click(function(){
    $('.popup-portfolio').removeClass('popup__open');
    $('body').removeClass('no-scroll');
    $('.popup__nav-link').removeClass('active');
    $('.layer img').removeClass('layer-active');
    $('.layer img:first-child').addClass('layer-active');
    $('.nav-menu-wrap').css('opacity','1');
  });
});


