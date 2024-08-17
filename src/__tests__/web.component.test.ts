import { fixture, html } from '@open-wc/testing';
import { expect } from 'chai';

describe('My Web Component', () => {
  it('renders correctly', async () => {
    const element = await fixture<HTMLElement>(
      html`<my-component></my-component>`,
    );
    expect(element.shadowRoot?.querySelector('p')?.textContent).to.equal(
      'Hello, World!',
    );
  });
});

// src/__tests__/my-component.test.js//
