const setSwiper = () => {
  var swiper = new Swiper('.mySwiper', {
    autoHeight: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
};

document.addEventListener('DOMContentLoaded', () => {
  setSwiper();
});
