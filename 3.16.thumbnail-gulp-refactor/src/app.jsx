var React = require('react'), // React is an NPM module, I use NPM-type syntax
    ThumbnailList = require('./thumbnail-list'); // This is a file I wrote, I use different syntax to require this

var options = {
  thumbnailData: [{
    title: 'See Tutorials',
    number: 480,
    header: 'Learn React',
    description: 'React is fantastic.',
    imageUrl: 'http://formatjs.io/img/react.svg'
  }, {
    title: 'See Tutorials',
    number: 65,
    header: 'Learn Gulp',
    description: 'Gulp will speed up your development workflow.',
    imageUrl: 'http://brunch.io/images/others/gulp.png'
  }]
};

var element = React.createElement(ThumbnailList, options);
React.render(element, document.querySelector('.container'));
