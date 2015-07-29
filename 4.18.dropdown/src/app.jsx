var React = require('react'),
    Dropdown = require('./dropdown');

var options = {
  title: 'Choose a class',
  items: [
    'Node.js and Socket.IO',
    'AjAX Development',
    'Learn Node.js by Example'
  ]
};

var element = React.createElement(Dropdown, options);
React.render(element, document.querySelector('.container'));
