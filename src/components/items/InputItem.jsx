var React = require('react');
import styles from './Inputitem.css';
var InputItem = React.createClass({
	onClick: function (event) {
		console.log(event.target.id);
	},
	render: function(){
		return(
			<div className="col-md-6">
				<input type="text" />
				<button id="boton" type="button" onClick={this.onClick}>Agregar</button>
			</div>   
		)
	}
});

module.exports = InputItem;    