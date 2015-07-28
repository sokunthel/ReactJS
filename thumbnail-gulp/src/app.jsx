var options = {
  thumbnailData: [{
    title: 'See Tutorials',
    number: 32,
    header: 'Learn React',
    description: 'React is fantastic.',
    imageUrl: 'http://formatjs.io/img/react.svg'
  }, {
    title: 'See Tutorials',
    number: 19,
    header: 'Learn Gulp',
    description: 'Gulp will speed up your development workflow.',
    imageUrl: 'http://brunch.io/images/others/gulp.png'
  }]
};

var element = React.createElement(ThumbnailList, options);
React.render(element, document.querySelector('.container'));
