export class LoadMoreBtn {
  #element;
  #className;
  #onClick;

  constructor({ selector, className, isHidden = false, onClick = () => null }) {
    this.#element = document.querySelector(selector);
    this.#className = className;
    this.#onClick = onClick;

    if (isHidden) this.hide();
    this.#bindEvent();
  }

  show() {
    this.#element.classList.remove(this.#className);
  }

  hide() {
    this.#element.classList.add(this.#className);
  }

  #bindEvent() {
    this.#element.addEventListener('click', this.#onClick);
  }
}
