const resolve = require('path').resolve;
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	//context: resolve(__dirname, 'src'),
	entry: './src/index.jsx',
	output: {
		path: __dirname + '/public/js',
		filename: 'bundle.js'
	},
	plugins: [
	    new ExtractTextPlugin('[name].css'),
	],
	module: {
		loaders: [
			{
				test: /\.jsx$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
		        test: /\.css$/,
		        use: ExtractTextPlugin.extract({
		        use: [
		            {
		              loader: 'css-loader',
		              options: { importLoaders: 1 },
		            },
		            'postcss-loader',
		          ],
		        }),
		    },
		    { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
	      	{ test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
	      	{ test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream' },
	      	{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
	      	{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml' }
		]
	}
}
