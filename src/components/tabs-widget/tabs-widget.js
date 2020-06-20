import { LitElement, css, html } from 'lit-element';

class TabsWidget extends LitElement {
  async performUpdate() {
    await fetch('../api/tabs.json')
      .then(result => result.json())
      .then(data => { console.log(data); this.tabs = data });
    await fetch('../api/search-results.json')
      .then(result => result.json())
      .then(data => { console.log(data); this.data = data });

    super.performUpdate();
  }

  static get styles() {
    return css`
      .tabs-widget {
        border-right: 1px solid rgb(196, 196, 196);
        border-bottom: 1px solid rgb(196, 196, 196);
        border-left: 1px solid rgb(196, 196, 196);
      }

      .tabs-widget__tab {
        background: rgb(167, 220, 233);
        color: rgb(71, 71, 71);
        border: none;
        border-top: 1px solid rgb(196, 196, 196);
        border-left: 1px solid rgb(196, 196, 196);
        padding: 7px 5px;
        cursor: pointer;
      }

      .tabs-widget__tabs-container {
        display: flex;
      }
    `
  }

  render() {
    return html`
      <section class="tabs-widget">
        <div class="tabs-widget__tabs-container">
          ${this.tabs.map(tab => 
            html`<button class="tabs-widget__tab" type="button">${tab}</button>`
          )}
        </div>
        ${this.data.map(item => 
          html`<div>${item.label}</div>`
        )}
      </section>
    `;
  }
}

customElements.define('tabs-widget', TabsWidget);
