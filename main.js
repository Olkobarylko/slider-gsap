$(document).ready(function () {
  // Click event for slider items
  $("li").on("click", function () {
    var item = $(this),
        index = item.index();

    item.addClass("active").siblings().removeClass("active");
    updateCardOverflows(index);
  });

  var itemCount = $('.anim-slider__item').length;
  var numberList = $('<ul class="number-navigation"></ul>');

  for (var i = 1; i <= itemCount; i++) {
    numberList.append('<li class="number-item" data-index="' + (i - 1) + '">' + i + '</li>');
  }

  $('.anim-slider').append(numberList);


  $('.number-item').on('click', function () {
    var index = $(this).data('index');


    var selectedItem = $('.anim-slider__item').eq(index);
    selectedItem.addClass('active');
    selectedItem.siblings().removeClass('active');


    updateCardOverflows(index);


    $(this).addClass('active-number').siblings().removeClass('active-number');
  });

  $('.number-item').first().addClass('active-number');
  $('.anim-slider__item').first().addClass('active');
  updateCardOverflows(0);


  function updateCardOverflows(activeIndex) {
    $('.anim-slider__item').each(function (index) {
      if (index < activeIndex) {
        $(this).css({
          'transform': 'rotateY(50deg)'
        });
      } else if (index > activeIndex) {
        $(this).css({
          'transform': 'rotateY(-50deg)'
        });
      } else {
        $(this).css({
          'transform': 'rotateY(0deg)'
        });
      }
    });
  }
});
