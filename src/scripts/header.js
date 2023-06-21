let lastYOffset = 0

function hideHeaderOnScroll($header) {
  if (
    !$header.classList.contains("fixed-header") &&
    !$header.classList.contains("sticky-header")
  ) {
    return
  }

  window.onscroll = () => {
    const currentYOffset = window.pageYOffset

    if (currentYOffset <= 100) {
      $header.classList.remove("scroll-up")
    }

    if (
      currentYOffset > lastYOffset + 100 &&
      !$header.classList.contains("scroll-down")
    ) {
      $header.classList.remove("scroll-up")
      $header.classList.add("scroll-down")
    } else if (
      currentYOffset < lastYOffset - 100 &&
      !$header.classList.contains("scroll-up")
    ) {
      $header.classList.remove("scroll-down")
      $header.classList.add("scroll-up")
    }

    if (
      currentYOffset >= lastYOffset + 100 ||
      currentYOffset <= lastYOffset - 100
    ) {
      lastYOffset = currentYOffset
    }
  }
}

const $navbarToggler = document.getElementById("navbar-toggler")
$navbarToggler.onclick = (e) => {
  const $navbarXmarkIcon = $navbarToggler.querySelector(".fa-xmark")
  const $navbarBarsIcon = $navbarToggler.querySelector(".fa-bars")

  if ($navbarToggler.getAttribute("aria-expanded") === "true") {
    $navbarXmarkIcon.classList.remove("d-none")
    $navbarBarsIcon.classList.add("d-none")
  } else {
    $navbarXmarkIcon.classList.add("d-none")
    $navbarBarsIcon.classList.remove("d-none")
  }
}

export { hideHeaderOnScroll }
