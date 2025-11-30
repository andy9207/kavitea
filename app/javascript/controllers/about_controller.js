import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["animate"]

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

  disconnect() {
    this.observer.disconnect()
  }
}
