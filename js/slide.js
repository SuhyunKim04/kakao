$(function () {
  function cardFadeMotion(container) {
    const items = $(`${container} .item`);
    const buttons = $(`${container} .slide_button button`);

    buttons.each(function (index, btn) {
      console.log(btn);

      btn.click(function () {
        console.log("hello", items[index]);
        console.log(items.eq(index));
        //버튼의 0번째를 누르면 슬라이드의 0번째 인덱스 번호가 slidein이 되야함
      });
    });

    /*

    items.forEach( function(item,index) {})
    items.forEach( (item,index) => {})
      */

    /*

    const $item_1 = $(".item_1");
    const $item_2 = $(".item_2");
    $item_1.click(function () {
      $(".slide_item_1").fadeIn(300, function () {
        $(".slide_item_2").fadeOut();
      });
      $(this).addClass("active");
      $item_2.removeClass("active");
    });

    $item_2.click(function () {
      $(".slide_item_2").fadeIn();
      $(".slide_item_1").fadeOut();
      $(this).addClass("active");
      $item_1.removeClass("active");
    });
    */
  }

  cardFadeMotion(".slide_container");
});
