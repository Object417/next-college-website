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

export { hideHeaderOnScroll }
