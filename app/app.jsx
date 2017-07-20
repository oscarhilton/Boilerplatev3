var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require("react-router");

// LOAD FOUNDATION
$(document).foundation();

//APP CSS
require('style!css!sass!applicationStyles');

  ReactDOM.render(
        <p>Boilerplate v.3</p>,
        document.getElementById('app')
     );