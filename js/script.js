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
const lg = lightGallery($lgContainer, {
  showZoomInOutIcons: true,
  actualSize: false,
  selector: ".swiper-slide > .lightgallery > a",
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

// select language
document.querySelectorAll(".option__value").forEach((option) => {
  option.addEventListener("click", () => {
    const selectedValue = option.querySelector(".country__name").textContent;
    const dropdown = option.closest(".dropdown");
    const selectedBox = document.querySelector(".eng");
    selectedBox.innerHTML = option.innerHTML;
    dropdown.classList.remove("open");
  });
});
