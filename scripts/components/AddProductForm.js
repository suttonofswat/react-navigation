var React = require('react');
var ProductModel = require('../models/ProductModel');

module.exports = React.createClass({
	render: function(){
		return(
				<div className="container">
				<div className="row">
					<form className="col s12" onSubmit={this.onAddProduct}>
						<h1>Add Product</h1>
						<div className="row">
							<div className="input-field col s12">
								<input type="text" ref="name" id="name" />
								<label htmlFor="name">Name</label>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s12">
								<input type="text" ref="product" id="product" />
								<label htmlFor="product">Product</label>
							</div>
						</div>
						<div className="row">
							<button className="waves-effect waves-light btn">Add Product</button>
						</div>
					</form>
				</div>
			</div>
		)
	},
	onAddProduct: function(e){
		e.preventDefault();
		console.log('added product')
		var newProduct = new ProductModel({
			name: this.refs.name.getDOMNode().value,
			product: this.refs.product.getDOMNode().value
		});
		newProduct.save();
	}



});
