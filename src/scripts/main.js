import "@/styles/main.scss"

import "@fortawesome/fontawesome-free/js/brands"
import "@fortawesome/fontawesome-free/js/solid"
import "@fortawesome/fontawesome-free/js/fontawesome"

import { Tooltip } from "bootstrap/dist/js/bootstrap"

import Swiper, { Navigation, Pagination } from "swiper"

// Disable form submit
const $searchForm = document.getElementById("search-form")
$searchForm.onsubmit = (e) => false

// Initialize Bootstrap tooltips
const $tooltips = document.querySelectorAll("[data-bs-toggle=tooltip]")
for (const $tooltip of $tooltips) {
  const tooltip = new Tooltip($tooltip, { boundary: document.body })
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
  slidesPerView: 1,
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
