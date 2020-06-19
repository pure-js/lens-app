import { LitElement, html } from 'lit-element';
// import { bestItems } from './best-items';

async function getItems() {
  const response = await fetch('../search-results.json')
    .then(result => result.json());
  return response;
}

class TabWidget extends LitElement {
  constructor() {
    super();

    this.data = getItems();
  }

  render() {
    return html`
      <section>
        <button type="button">Best sellers</button>
        <button type="button">Daily</button>
        <button type="button">Two weekly</button>
        <button type="button">Monthly</button>
        <button type="button">Tonic</button>
        <button type="button">Multifocal</button>
        ${this.data.map(item => 
          html`<div>${item.label}</div>`
        )}
      </section>
    `;
  }
}

customElements.define('tab-widget', TabWidget);
