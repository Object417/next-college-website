import "@/styles/main.scss"

import "@fortawesome/fontawesome-free/js/brands"
import "@fortawesome/fontawesome-free/js/solid"
import "@fortawesome/fontawesome-free/js/regular"
import "@fortawesome/fontawesome-free/js/fontawesome"

import { Tooltip } from "bootstrap"
import { hideHeaderOnScroll } from "./header"
import prependBase from "./baseUrlWorkaround"

console.info("main script loaded")

prependBase()

// Initialize Bootstrap tooltips
const $tooltips = document.querySelectorAll("[data-bs-toggle=tooltip]")
for (const $tooltip of $tooltips) {
  const tooltip = new Tooltip($tooltip, { boundary: document.body })
}

const $header = document.querySelector("body > header")
hideHeaderOnScroll($header)
