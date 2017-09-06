var React = require('react');
var InputBox = require('../boxes/InputBox.jsx');
var ResultsBox = require('../boxes/ResultsBox.jsx');
var Box = React.createClass({
	render: function () {
		return(
			<div className="container">
				<InputBox/>
				<ResultsBox/>
			</div> 
		)
	}	
});

module.exports = Box; 