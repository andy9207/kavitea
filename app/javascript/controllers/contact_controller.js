import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["animate", "form", "success"]

  connect() {
    this.observer = new IntersectionObserver(
      (entries) => this.handleIntersection(entries),
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    )

    this.animateTargets.forEach((target) => {
      target.classList.add("opacity-0", "translate-y-8")
      this.observer.observe(target)
    })
  }

  handleIntersection(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0", "translate-y-8")
        entry.target.classList.add("opacity-100", "translate-y-0", "transition-all", "duration-700")
        this.observer.unobserve(entry.target)
      }
    })
  }

  submit(event) {
    event.preventDefault()

    // Show success message (visual only, no backend)
    if (this.hasSuccessTarget) {
      this.successTarget.classList.remove("hidden")
      this.successTarget.classList.add("animate-fade-in")
    }

    // Reset form
    if (this.hasFormTarget) {
      this.formTarget.reset()
    }

    // Hide success message after 5 seconds
    setTimeout(() => {
      if (this.hasSuccessTarget) {
        this.successTarget.classList.add("hidden")
      }
    }, 5000)
  }

  disconnect() {
    this.observer.disconnect()
  }
}
