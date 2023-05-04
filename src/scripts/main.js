import "@/styles/main.scss"

import "@fortawesome/fontawesome-free/js/brands"
import "@fortawesome/fontawesome-free/js/solid"
import "@fortawesome/fontawesome-free/js/fontawesome"

import "bootstrap/dist/js/bootstrap"

import Swiper, { Navigation, Pagination } from "swiper"

import "swiper/css/bundle"

const $searchForm = document.getElementById("search-form")
$searchForm.onsubmit = (e) => false

const coursesSlider = new Swiper(".courses-slider", {
  modules: [Navigation],
  direction: "horizontal",
  // loop: true,
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
    enabled: false
  },
  slidesPerView: 1,
  spaceBetween: 16,
  breakpoints: {
    576: {
      slidesPerView: 2,
      navigation: {
        enabled: true
      }
    },
    992: {
      slidesPerView: 3,
      navigation: {
        enabled: true
      }
    }
  }
})
