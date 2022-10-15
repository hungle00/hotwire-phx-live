import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="removals"
export default class extends Controller {
  connect() {
    console.log(this.element)
    setTimeout(this.remove, 4000);
  }

  remove = () => {
    this.element.remove()
  }
}
