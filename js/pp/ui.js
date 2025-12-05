const setSwiper = () => {
  var swiper = new Swiper('.mySwiper', {
    autoHeight: true,
    slidesPerView: 'auto',
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
};

document.addEventListener('DOMContentLoaded', () => {
  setSwiper();
});
