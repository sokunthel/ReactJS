var React = require('react');

module.exports = React.createClass({
  handleClick: function(item){
    this.props.whenItemClicked(item);
  },

  render: function(){
    list = this.props.items.map(function(item){
      return <li className={this.props.selectedItem === item?"active":""}><a onClick={this.handleClick.bind(this, item)}>{item}</a></li>
    }.bind(this));

    return <ul className="dropdown-menu">
      {list}
    </ul>
  }
});
