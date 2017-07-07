const { createElement } = require('react');
const { render } = require('react-dom');
const Hello = require('./Hello.jsx').default;

console.log(Hello)
render(createElement(Hello), document.getElementById('app'));
