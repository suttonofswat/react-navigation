'use strict';
var React = require('react');
var Backbone = require('backbone');
window.$ = require('jquery');
window.jQuery = $;
var _ = require('backbone/node_modules/underscore')
var NavigationComponent = require('./components/NavigationComponent');
var HomeComponent = require('./components/HomeComponent');
var DashboardComponent = require('./components/DashboardComponent');
var LoginComponent = require('./components/LoginComponent');
var RegisterComponent = require('./components/RegisterComponent');

Parse.initialize(
	'6g2KhoTvaKHA5EnH5chPfBswiOdGGb0YcUfHYk7e', 
	'wB4uBvaSIuAquXA3uJllCFQqv6OocxPSEhevan0h'
);

var app = document.getElementById('app');

var Router = Backbone.Router.extend({
	routes: {
		'': 'home',
		'dashboard': 'dashboard',
		'login': 'login',
		'register': 'register'
	},
	home: function() {
		React.render(<HomeComponent />, app);
	},
	dashboard: function() {
		if(!Parse.User.current()) {
			this.navigate('login',{trigger: true});
		}
		else {
			React.render(<DashboardComponent />, app);
		}
		
	},
	login: function() {
		if (Parse.User.current()){
			this.navigate('dashboard', {trigger:true});
		}
		else{
			React.render(<LoginComponent router={this} />, app);
		}
		
	},
	register: function() {
		if (Parse.User.current()){
			this.navigate('dashboard', {trigger:true});
		}
		else{
			React.render(<RegisterComponent router={this} />, app);
		}
		
	}
});

var r = new Router();
Backbone.history.start();

React.render(
	<NavigationComponent router={r} />,
	document.getElementById('nav')
);