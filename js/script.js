var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  allowTouchMove: false,
  speed: 400,
  effect: "fade",
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
  pagination: {
    el: ".slider-pagination",
    type: "fraction",
  },
});

var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 500,
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const $lgContainer = document.querySelector(".mySwiper");
console.log($lgContainer);
const lg = lightGallery($lgContainer, {
  showZoomInOutIcons: true,
  actualSize: false,
  selector: ".swiper-slide > .lightgallery > a",
  // licenseKey: "your_license_key",
  speed: 300,
  controls: true,
  loop: false,
});

// like btn
const likeBtn = document.querySelector(".like__btn");

likeBtn.addEventListener("click", () => {
  if (likeBtn.textContent.toLowerCase() == "like") {
    likeBtn.textContent = "Liked";
    console.log(likeBtn.textContent);
  } else if (likeBtn.textContent === "Liked") {
    likeBtn.textContent = "Like";
  }
  likeBtn.classList.toggle("active");
});
