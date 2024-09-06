document.addEventListener('DOMContentLoaded', function () {
    var carouselElementList = [].slice.call(document.querySelectorAll('.carousel'))
    var carouselList = carouselElementList.map(function (carouselEl) {
      return new mdb.Carousel(carouselEl)
    })
  });
  