var React = require('react');
var InputItem = require('../items/InputItem.jsx')
var InputBox = React.createClass({
	getInitialState: function () {
		return{
			button_title: "Agregar"
		}	
	},
	onClick: function (event) {
		if (this.state.button_title == "Agregar") {
			this.setState({button_title: 'No agregar'});
		}else if(this.state.button_title == "No agregar"){
			this.setState({button_title: 'Agregar'});
		}
	},
	render: function () {
		return(
			<div className="row">
				<InputItem/>
				<button id="boton" type="button" onClick={this.onClick}>{this.state.button_title}</button>
			</div>
		)
	}	
}); 

module.exports = InputBox;