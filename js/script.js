let header = document.querySelector("header");
let menuIcon = document.querySelector("#menu-icon");
let menu = document.querySelector(".menu");
let sh     = document.querySelector("shadow");
window.addEventListener('scroll' , () => {
  header.classList.toggle('shadow', window.scrollY > 0);
  
});

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x')
  menu.classList.toggle('active')
}
window.onscroll = () => {
  menuIcon.classList.remove('bx-x')
  menu.classList.remove('active')
}

var swiper = new Swiper(".mein-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });



  var swiper = new Swiper(".coming-cotainer", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 55000,
      disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 2,
       },

       320: {
        slidesPerView: 1.5,
       },

       568: {
         slidesPerView: 3,
        },
   
        768: {
         slidesPerView: 4,
        },
   
        968: {
         slidesPerView: 5,
        },
    },

  });


