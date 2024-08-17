import puppeteer, { Browser, Page } from 'puppeteer';
import { fixture, html } from '@open-wc/testing';
import { expect } from 'chai';

describe('My Web Component', () => {
  let browser: Browser;
  let page: Page;

  it('renders correctly', async () => {
    await page.goto('http://localhost:8080'); // Replace with the URL where your component is served
    const element = await page.$('my-component');
  });
});
