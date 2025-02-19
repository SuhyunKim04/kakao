$(function () {
  function cardFadeMotion() {
    const $item_1 = $(".item_1");
    const $item_2 = $(".item_2");
    $item_1.click(function () {
      $(".inner_slide_1").fadeIn(300, function () {
        $(".inner_slide_2").fadeOut();
      });
      $(this).addClass("active");
      $item_2.removeClass("active");
    });

    $item_2.click(function () {
      $(".inner_slide_2").fadeIn();
      $(".inner_slide_1").fadeOut();
      $(this).addClass("active");
      $item_1.removeClass("active");
    });
  }

  cardFadeMotion();
});
