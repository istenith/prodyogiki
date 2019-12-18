const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
	mode: 'development',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
	},
	devServer: {
		port: 9600,
		host: '0.0.0.0',
	},
	plugins: [
		new HtmlWebpackPlugin({
			filetype: 'pug',
			template: './src/pug/index.pug',
			hash: true,
		}),
	],
	module: {
		rules: [
			{
				test: /\.less$/,
				use: ['style-loader', 'css-loader', 'less-loader'],
			},
		],
	},
});
