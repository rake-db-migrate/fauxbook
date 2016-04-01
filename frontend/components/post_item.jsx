var React = require( 'react' );
var PostAuthorDisplay = require( './post_author_display' );

var PostItem = React.createClass({
  render: function () {
    return (
      <div className='post group'>
        <PostAuthorDisplay post={ this.props.post }/>
        { this._displayPhoto() }
        <p>{ this.props.post.body }</p>
      </div>
    );
  },

  _displayPhoto: function () {
    if ( this.props.post.photo ) {
      return (
        <div className='post-photo-container'>
          <img className='post-photo' src={ this.props.post.photo } />
        </div>
      );
    }
  }
});

module.exports = PostItem;
