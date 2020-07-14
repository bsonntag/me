class FadeInImage extends HTMLImageElement {
  constructor() {
    super();
    this.style.opacity = this.complete ? 1 : 0;
    this.style.transition = 'opacity 500ms ease 0s';
    this.addEventListener('load', (event) => {
      this.style.opacity = 1;
    });
  }
}

customElements.define('fade-in-image', FadeInImage, { extends: 'img' });
