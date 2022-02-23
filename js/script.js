const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function () {
  if (this.matchMedia("(min-width: 768px)").matches) {
    $dropdown.hover(
      function () {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function () {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});

// Carousel
$(document).ready(function () {
  $("#myCarousel").on("slide.bs.carousel", function (e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 4;
    var totalItems = $("#myCarousel .carousel-item").length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i = 0; i < it; i++) {
        // append slides to end
        if (e.direction == "left") {
          $("#myCarousel .carousel-item")
            .eq(i)
            .appendTo("#myCarousel .carousel-inner");
        } else {
          $("#myCarousel .carousel-item")
            .eq(0)
            .appendTo("#myCarousel .carousel-inner");
        }
      }
    }
  });

  $("#storyCarousel").on("slide.bs.carousel", function (e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 4;
    var totalItems = $("#storyCarousel .carousel-item").length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i = 0; i < it; i++) {
        // append slides to end
        if (e.direction == "left") {
          $("#storyCarousel .carousel-item")
            .eq(i)
            .appendTo("#storyCarousel .carousel-inner");
        } else {
          $("#storyCarousel .carousel-item")
            .eq(0)
            .appendTo("#storyCarousel .carousel-inner");
        }
      }
    }
  });
});

// Sticky

function fixDiv() {
  var $buy = $('#sticky');
  var $hide = $('#sticky-hide');
  if ($(window).scrollTop() > $buy.data("top") && $(window).scrollTop() < $hide.offset().top) {
    $('#sticky-content').css({ 'position': 'fixed', 'top': '0', 'display': 'flex' });
    $('#sticky').css({ 'display': 'flex' });
  }
  else {
    $('#sticky').css({ 'display': 'none' });
  }
}

$("#sticky").data("top", $("#sticky").offset().top); // set original position on load
$(window).scroll(fixDiv);
