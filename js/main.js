$(function () {
  //    $(window).resize(function () {
  //        location.reload();
  //    })
  // modaal.js
  $('.modal').modaal({
    background: '#000',
    overlay_opacity: '0.3'
  });
  // スムーススクロール
  $('a[href^="#link-"]').click(function () {
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });
  // inview
  $('.work').on('inview', function (event, isInView) {
    if (isInView) {
      //表示領域に入った時
      $(this).addClass('fadeInUp');
    }
  });
  // slick
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '100px',
    dots: true,
    prevArrow: '<img src="./images/left.png" class="slide-arrow slick-prev">',
    nextArrow: '<img src="./images/right.png" class="slide-arrow slick-next">'
  });
});
