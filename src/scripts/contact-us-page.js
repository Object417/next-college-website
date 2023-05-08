import { Modal } from "bootstrap"

const $formFeedbackModal = document.getElementById("formFeedbackModal")
const bsFormFeedbackModal = new Modal($formFeedbackModal, {})
const $contactForm = document.getElementById("contact-form")

if ($contactForm) {
  $contactForm.onsubmit = (e) => {
    e.preventDefault()
    e.stopPropagation()

    if (e.target.classList.contains("needs-validation")) {
      e.target.classList.remove("needs-validation")
      e.target.classList.add("was-validated")
    }

    bsFormFeedbackModal.show()
  }
}
