class DragNDrop extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  get shadow() {
    return this.shadow;
  }

  set shadow(val) {
    this.shadow = val;
  }

  static get observedAttributes() {
    return [];
  }

  attributeChangedCallback(name, oldVal, newValue) {
    this[`update${name.charAt(0).toUpperCase() + name.slice(1)}`](newValue);
  }

  connectedCallback() {
    const template = '';
    this.shadow.innerHTML = template;
  }
}
window.customElements.define('app-drag-drop', DragNDrop);
