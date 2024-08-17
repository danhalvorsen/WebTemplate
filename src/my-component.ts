// my-component.js

 class MyComponent extends HTMLElement {
  constructor() {
    super();

    // Attach a shadow DOM to the component
    this.attachShadow({ mode: 'open' });

    // Create elements
    const wrapper = document.createElement('div');
    const message = document.createElement('p');
    message.textContent = 'Hello, World!';

    // Apply styles
    const style = document.createElement('style');
    style.textContent = `
        div {
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
          background-color: #f9f9f9;
        }
        p {
          font-size: 16px;
          color: #333;
        }
      `;

    // Append elements to the shadow DOM
    wrapper.appendChild(message);
    this.shadowRoot?.append(style, wrapper);
  }
}

// Define the custom element
customElements.define('my-component', MyComponent);
