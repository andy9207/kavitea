import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["header", "mobileMenu", "menuIcon", "closeIcon"]

  connect() {
    this.isOpen = false
    this.handleScroll = this.handleScroll.bind(this)
    window.addEventListener("scroll", this.handleScroll)
    this.handleScroll()
  }

  disconnect() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll() {
    const scrollY = window.scrollY
    if (scrollY > 50) {
      this.headerTarget.classList.add("bg-kavitea-blue/95", "backdrop-blur-sm", "shadow-lg")
    } else {
      this.headerTarget.classList.remove("bg-kavitea-blue/95", "backdrop-blur-sm", "shadow-lg")
    }
  }

  toggle() {
    this.isOpen = !this.isOpen
    this.mobileMenuTarget.classList.toggle("hidden")
    this.menuIconTarget.classList.toggle("hidden")
    this.closeIconTarget.classList.toggle("hidden")
  }

  close() {
    this.isOpen = false
    this.mobileMenuTarget.classList.add("hidden")
    this.menuIconTarget.classList.remove("hidden")
    this.closeIconTarget.classList.add("hidden")
  }
}
