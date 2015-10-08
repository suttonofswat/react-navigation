var React = require('react');
var ProductModel = require('../models/ProductModel');

module.exports = React.createClass({
	getInitialState: function() {
	    return {
	          products: []
	    };
	},
	componentWillMount: function() {
	      var query = new Parse.Query(ProductModel);
	      query
	      // .equalTo('user', Parse.User.current())
	      .find().then(
	      		(products) => {
	      			console.log(products);
	      			this.setState({products: products});
	      		},
	      		(err) => {
	      			console.log(err);
	      		}
	      	);
	},
	render: function() {
		var productElements = this.state.products.map(function(product){
			return (<a href={'#product/details/'+product.id}>{product.get('name')}</a>)
		});
		return (
			<div>
				<h1>Products</h1>
				{productElements}
			</div>
			)
	}
})