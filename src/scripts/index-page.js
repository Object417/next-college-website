import Swiper, { Navigation, Pagination } from "swiper"

console.info("index page script loaded")

// Disable form submit
const $departmentsSearchForm = document.getElementById(
  "departments-search-form"
)
if ($departmentsSearchForm) {
  $departmentsSearchForm.onsubmit = (e) => false
}

const $searchForm = document.getElementById("search-form")
if ($searchForm) {
  $searchForm.onsubmit = (e) => false
}

// Initialize Swiper slider
const coursesSlider = new Swiper(".courses-slider", {
  modules: [Navigation],
  direction: "horizontal",
  loop: true,
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
    enabled: false
  },
  slidesPerView: 1.1,
  spaceBetween: 16,
  breakpoints: {
    576: {
      loop: false,
      slidesPerView: 2,
      navigation: {
        enabled: true
      }
    },
    992: {
      loop: false,
      slidesPerView: 3,
      navigation: {
        enabled: true
      }
    }
  }
})

// Enable video controls
const $bgVideo = document.getElementById("bg-video")
const $videoPlayPause = document.getElementById("video-play-pause")

$videoPlayPause.onclick = (e) => {
  if ($bgVideo.paused) {
    $bgVideo.play()
    $videoPlayPause.querySelector(".fa-play").classList.add("d-none")
    $videoPlayPause.querySelector(".fa-pause").classList.remove("d-none")
  } else {
    $bgVideo.pause()
    $videoPlayPause.querySelector(".fa-play").classList.remove("d-none")
    $videoPlayPause.querySelector(".fa-pause").classList.add("d-none")
  }
}
