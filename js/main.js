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
  topMenu = $(".popup__content-menu"),
  topMenuHeight = topMenu.outerHeight() - 195,
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
}

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


// slider mobile
var slideNow = 1;
var slideCount = $('.portfolio__wrap__slider').children().length;
var translateWidth = 0;
var slideInterval = 2000;
$('.slide-left').click(function(){
  prevSlide();
});
$('.slide-right').click(function(){
  nextSlide();
});

function nextSlide() {
  if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
      
      slideNow = 3;
      
      // $('.slider__control-item').css('background','none');
      // $('.slider__control-item:nth-child('+ slideNow +')').css('background','#fff');
      // $('.slider__items').css('opacity', '0');
      // $('.slider__items:nth-child('+ slideNow +')').animate({'opacity':'1'}, 500);
      
  }else{
    translateWidth = -$('.portfolio__slide').width() * (slideNow) * 2;
    $('.portfolio__wrap__slider').css({
        'transform': 'translate(' + translateWidth + 'px, 0)',
        '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
        '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
    });
  
    // $('.slider__control-item').css('background','none');
    slideNow++;
    // $('.slider__items').css('opacity', '0');
    // $('.slider__items:nth-child('+ slideNow +')').animate({'opacity':'1'}, 500);
    // $('.slider__control-item:nth-child('+ slideNow +')').css('background','#fff');
    // if (slideNow == 3){
    //   $('.wrap__slide-btn-right').css('display','none');
    // }else{
    //   $('.wrap__slide-btn-right').css('display','block');
    // }
    // if (slideNow == 1){
    //   $('.wrap__slide-btn-left').css('display','none');
    // }else{
    //   $('.wrap__slide-btn-left').css('display','block');
    // }
  }
}

function prevSlide() {
  if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
      
      $('.portfolio__wrap__slider').css({
          'transform': 'translate(' + translateWidth + 'px, 0)',
          '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
          '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
      });
      slideNow = 1;
      // $('.slider__items').css('opacity', '0');
      // $('.slider__control-item').css('background','none');
      // $('.slider__items:nth-child('+ slideNow +')').animate({'opacity':'1'}, 500);
      // $('.slider__control-item:nth-child('+ slideNow +')').css('background','#fff');
      
  } else {
      translateWidth = -$('.portfolio__slide').width() * (slideNow - 2);
      $('.portfolio__wrap__slider').css({
          'transform': 'translate(' + translateWidth + 'px, 0)',
          '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
          '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
      });
      slideNow--;
      // $('.slider__items').css('opacity', '0');
      // $('.slider__control-item').css('background','none');
      // $('.slider__items:nth-child('+ slideNow +')').animate({'opacity':'1'}, 500);
      // $('.slider__control-item:nth-child('+ slideNow +')').css('background','#fff');
      // if (slideNow == 3){
      //   $('.wrap__slide-btn-right').css('display','none');
      // }else{
      //   $('.wrap__slide-btn-right').css('display','block');
      // }
      // if (slideNow == 1){
      //   $('.wrap__slide-btn-left').css('display','none');
      // }else{
      //   $('.wrap__slide-btn-left').css('display','block');
      // }
  }
}
