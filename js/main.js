$(document).ready(function () {
  function updateSlickDotsWidth() {
    $(".slider_testimonials").slick({
      infinite: true,
      arrows: true,
      dots: true,
      autoplay: false,
      slidesToShow: 2,
      slidesToScroll: 1,
    });

    var slickDots = $(".slick-dots");
    var width = slickDots.width();
    slickDots.css("width", width + "px");

    var sliderTestimonials = $(".slider_testimonials");
    var sliderOffset = sliderTestimonials.offset();
    var sliderWidth = sliderTestimonials.width();

    // Calculate coordinates for .slick-prev
    var slickPrevLeft =
      (((slickDots.offset().left - sliderOffset.left) / sliderWidth) * 100) + (14 / sliderWidth * 100);
    $(".slick-prev").css("left", slickPrevLeft + "%");

    // Calculate coordinates for .slick-next
    var slickNextLeft = 
    ((slickDots.offset().left + width - sliderOffset.left) / sliderWidth) * 100; 
  slickNextLeft += (width / sliderWidth) * 100;
  slickNextLeft += (30 / sliderWidth) * 100;
  $(".slick-next").css("left", (slickNextLeft) + "%");

  }

  // Initial widths setup
  updateSlickDotsWidth();

  // Recalculate on window resize
  $(window).resize(function () {
    updateSlickDotsWidth();
  });

  // Observer for attributes or child list changes
  const observer = new MutationObserver(function (mutations) {
    for (let mutation of mutations) {
      if (mutation.type === "attributes" || mutation.type === "childList") {
        updateSlickDotsWidth();
      }
    }
  });

  var config = { attributes: true, childList: true, subtree: false };
  observer.observe($(".slick-dots")[0], config);
});


const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute("aria-expanded");

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute("aria-expanded", "false");
  }

  if (itemToggle == "false") {
    this.setAttribute("aria-expanded", "true");
  }
}

items.forEach((item) => item.addEventListener("click", toggleAccordion));