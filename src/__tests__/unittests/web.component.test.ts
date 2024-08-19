import { fixture, html } from '@open-wc/testing';
import { PopupInfo } from '../../popupinfo.js';
import { expect } from 'chai';

describe('My Web Component', () => {
  it('renders correctly', async () => {
    const element = await fixture<PopupInfo>(
      html`<my-component></my-component>`,
    );
    console.log(`element: ${element}`);
    console.log(`element should return info about it self: ${element.GetInfo}`);

    expect(element).to.not.be.null;
  });

  it('');
});
