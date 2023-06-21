console.info("courses page script loaded")

const $courseSearchForm = document.getElementById("course-search-form")
$courseSearchForm.onsubmit = (e) => false

const $header = document.querySelector("body > header")
const $main = document.querySelector("body > main")

$main.style.paddingTop = $header.getBoundingClientRect().height + "px"
