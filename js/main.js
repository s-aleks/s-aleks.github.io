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
