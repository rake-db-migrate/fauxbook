var APIUtil = require( './utils/api_util' );
var React = require( 'react' );
var ReactDOM = require( 'react-dom' );
var ReactRouter = require( 'react-router' );
var Route = ReactRouter.Route;
var Router = ReactRouter.Router;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var PostDisplay = require( './components/posts/post_display' );
var App = require( './components/app' );
var Profile = require( './components/profile' );
var LogIn = require( './components/login/login' );
var SessionStore = require( './stores/session_store' );
var PostIndex = require( './components/post_index' );
var AboutProfileDisplay = require( './components/about_profile_display' );
var FriendsProfileDisplay = require( './components/friends_profile_display' );
var Feed = require( './components/feed' );
var ProfileDisplay = require( './components/profile_display' );

var _ensureLoggedIn = function ( nextState, replace, asyncCallback ) {
  var _redirectIfNotLoggedIn = function ( replace, callback ) {
    if ( SessionStore.isLoggedIn() ) {
      callback();
    } else {
      replace('/login');
      callback();
    }
  };

  if ( SessionStore.currentUserFetched() ) {
    _redirectIfNotLoggedIn( replace, asyncCallback );
  } else {
    APIUtil.fetchCurrentUser( function() {
      _redirectIfNotLoggedIn( replace, asyncCallback );
    });
  }
};

var _ensureNotLoggedIn = function ( nextState, replace, asyncCallback ) {
  if ( SessionStore.isLoggedIn() ) {
    replace( '/' );
  }
  asyncCallback();
};

var routes = (
  <Route>
    <Route path='/' onEnter={ _ensureLoggedIn } component={ App }>
      <IndexRoute component={ Feed } />
      <Route path='/users/:id' component={ Profile } >
        <IndexRoute component={ ProfileDisplay } />
        <Route path='about' component={ AboutProfileDisplay } />
        <Route path='friends' component={ FriendsProfileDisplay } />
      </Route>
      <Route path='/posts/:id' component={ PostDisplay } />
    </Route>
    <Route path='/login' onEnter={ _ensureNotLoggedIn } component={ LogIn } />
  </Route>
);

$( function() {
  if ( $( '#app' )[0] ) {
    ReactDOM.render(
      <Router history={ hashHistory }>{ routes }</Router>,
      $( '#app' )[0]
    );
  } else {
    console.log( 'Not logged in' );
  }
});
