var React = require('react'),
    Button = require('./button'),
    List = require('./list');

module.exports = React.createClass({
  getInitialState: function(){
    return {open: false}
  },

  handleClick: function(){
    this.setState({
      open: !this.state.open
    })
  },

  handleItemClick: function(item){
    this.setState({
      open: false,
      itemTitle: item
    });
  },

  render: function(){
    return <div className={"dropdown " + (this.state.open?"open":"")}>
      <Button 
        whenClicked={this.handleClick}
        className="btn-primary"
        title={this.state.itemTitle || this.props.title}
        subTitleClassName="caret" />
      <List
        items={this.props.items}
        whenItemClicked={this.handleItemClick}
        selectedItem={this.state.itemTitle || ""}
         />
    </div>
  }
});
