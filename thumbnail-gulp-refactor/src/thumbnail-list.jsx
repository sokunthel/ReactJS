var React = require('react'),
    Thumbnail = require('./thumbnail'); // Go find component "thumbnail" and assign to "Thumbnail". Use this to solve the concatenating. This will tell browser to load the files in the order we want

module.exports = React.createClass({
  render: function(){
    var list = this.props.thumbnailData.map(function(thumbnailProps){
      return <Thumbnail {...thumbnailProps} />
    });

    return <div className="row">
      {list}
    </div>
  }
});
