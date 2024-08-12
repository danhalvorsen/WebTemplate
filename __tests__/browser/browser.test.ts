import { JSDOM } from 'jsdom';

const dom = new JSDOM(`<html><body><h1>Hello, world!</h1></body></html>`);

// Access the document property
const document = dom.window.document;

// Example usage of document
const heading = document.querySelector('h1');
console.log(heading?.textContent); // "Hello, world!"