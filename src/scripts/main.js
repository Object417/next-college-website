import "@/styles/main.scss"

import "@fortawesome/fontawesome-free/js/brands"
import "@fortawesome/fontawesome-free/js/solid"
import "@fortawesome/fontawesome-free/js/fontawesome"

import { Tooltip } from "bootstrap/dist/js/bootstrap"

import Swiper, { Navigation, Pagination } from "swiper"

import { hideHeaderOnScroll } from "./header"

// Disable form submit
const $searchForm = document.getElementById("search-form")
if ($searchForm) {
  $searchForm.onsubmit = (e) => false
}

const $departmentsSearchForm = document.getElementById(
  "departments-search-form"
)
if ($departmentsSearchForm) {
  $departmentsSearchForm.onsubmit = (e) => false
}

const $contactForm = document.getElementById("contact-form")
if ($contactForm) {
  $contactForm.onsubmit = (e) => {
    e.preventDefault()
    e.stopPropagation()

    if (e.target.classList.contains("needs-validation")) {
      e.target.classList.remove("needs-validation")
      e.target.classList.add("was-validated")
    }

    console.log(e.target.checkValidity())
  }
}

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

const $header = document.querySelector("body > header")
hideHeaderOnScroll($header)
