class ListaReproduccion extends HTMLElement {
  constructor(size, border) {
    super(); 
    this._shadow = this.attachShadow({ mode: 'open' });
    this.size = size;
    this.border = border;
  }

  get shadow() {
    return this._shadow;
  }

  set shadow(val) {
    this._shadow = val;
  }

  static get observedAttributes() {
    return ['size','border'];
  }

  attributeChangedCallback(name, oldVal, newValue) {
    this[`update${name.charAt(0).toUpperCase() + name.slice(1)}`](newValue);
  }

  connectedCallback() {
    let template = '';
    fetch('/components/ListaReproduccion/template.html', {
      method: 'GET',
    }).then((response) => {
      response.text().then((data) => {
        template = data;
        this.shadow.innerHTML = template;
      });
    });
  }
}
window.customElements.define('app-lista', ListaReproduccion);
