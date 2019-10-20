class ReproductorVideo extends HTMLElement {
  constructor(src, controls, volume, description, title) {
    super(); 
    this.src = src;
    this.controls = controls;
    this.volume = volume;
    this.description = description || 'No description';
    this.title = title || 'No title';
    this._shadow = this.attachShadow({ mode: 'open' });
  }

  get shadow() {
    return this._shadow;
  }

  set shadow(val) {
    this._shadow = val;
  }

  static get observedAttributes() {
    return ['src','controls','volume','description','title'];
  }

  attributeChangedCallback(name, oldVal, newValue) {
    this[`update${name.charAt(0).toUpperCase() + name.slice(1)}`](newValue);
  }

  updateSrc(val){
    this.shadow.querySelector('video').src = val;
  }

  updateControls(val){
    this.shadow.querySelector('video').controls = val;
  }

  updateDescription(val){
    this.shadow.querySelector('#Description').innerHTML = val;
  }

  updateTitle(val){
    this.shadow.querySelector('#Title').innerHTML = val;
  }

  connectedCallback() {
    let template;
    fetch('/components/ReproductorVideo/template.html', {
      method: 'GET',
    }).then((response) => {
      response.text().then((data) => {
        template = data;
        this.shadow.innerHTML = template;
      });
    });
  }
}

window.customElements.define('app-reproductor', ReproductorVideo);
