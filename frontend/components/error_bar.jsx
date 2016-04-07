var React = require( 'react' );

var ErrorStore = require( '../stores/error_store' );
var ModalStore = require( '../stores/modal_store' );

var ErrorBar = React.createClass({
  getInitialState: function () {
    return { errors: null };
  },

  componentDidMount: function () {
    this.errorsListener = ErrorStore.addListener( this._handleErrors );
    this.modalsListener = ModalStore.addListener( this._handleModals );
  },

  render: function () {
    if ( this.state.errors ) {
      return this._renderErrorList();
    } else {
      return <div></div>;
    }
  },

  _renderErrorList: function () {
    return (
      <div className='error-bar bar--shadowed'>
        <ul className='error-bar__error-list'>
          { this._renderErrorItems() }
        </ul>
      </div>
    );
  },

  _renderErrorItems: function () {
    return this.state.errors.map( function ( error ) {
      return <li>{ error }</li>;
    });
  },

  _handleErrors: function () {
    this.setState({ errors: ErrorState.all() });
  },

  _handleModals: function () {
    this.setState({ errors: null });
  },
});

module.exports = ErrorBar;