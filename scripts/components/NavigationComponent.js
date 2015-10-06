var React = require('react');
var Backbone = require('backbone');

module.exports = React.createClass({
	componentWillMount: function(){
		this.props.router.on('route', () => {
			this.forceUpdate();

		});
	},
	render: function() {
		var Links=[];

		Links.push(this.createNavLink('', 'Home'));

		if(!Parse.User.current()){
			Links.push(this.createNavLink('login', 'Login'));
			Links.push(this.createNavLink('register', 'Register'));
		}
		else{
			Links.push(this.createNavLink('dashboard', 'Dashboard'));
			Links.push(<li><a href="#" onClick={this.logout}>Logout</a></li>);
		}

		return (
			<div className="nav-wrapper">
				<a href="#" className="brand-logo left">Login Example</a>
				<ul id="nav-mobile" className="right">
						{Links}
				</ul>
			</div>
		);
	},
	logout: function(e){
		e.preventDefault();
		Parse.User.logOut();
		this.props.router.navigate('', {trigger: true});
	},
	createNavLink: function(url,label) {
		var currentUrl = Backbone.history.getFragment();
		if (currentUrl === url){
			return(<li key={url} className="active"><a href={'#'+url}>{label}</a></li>)
		}
		else{
			return(<li key={url}><a href={'#'+url}>{label}</a></li>)
		}
	}
});