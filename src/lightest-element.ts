import { render } from "lit-html";

export class LightestElement extends HTMLElement {
  __DEBUG: Boolean;
  render: Function;
  // static css = "";

  constructor() {
    super();
    //   this._countryCode = null;
    this.attachShadow({ mode: "open" });
    this.__DEBUG = false;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (this.__DEBUG) {
      console.log(
        `Lightest Element - attribute changed callback - ${name} ${oldValue} ${newValue}`
      );
    }

    this._updateRendering();
  }

  connectedCallback() {
    this._updateRendering();
  }

  _updateRendering() {
    if (this.__DEBUG) {
      console.log("Lightest Element - rendering");
    }

    const template = this.render();
    // Render the template to the document
    render(template, this.shadowRoot);
  }
}
