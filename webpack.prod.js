const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const WebpackMd5HashPlugin = require('webpack-md5-hash');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const HtmlWebpackInlineSVGPlugin = require('html-webpack-inline-svg-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = merge(common, {
	mode: 'production',

	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].[chunkhash].bundle.js',
	},

	optimization: {
		minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()],
	},

	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].bundle.css',
		}),
		new WebpackMd5HashPlugin(),
		new HtmlWebpackPlugin({
			filetype: 'pug',
			filename: 'index.html',
			template: './src/pug/index.pug',
			chunks: ['app'],
			minify: {
				removeAttributeQuotes: true,
				collapseWhitespace: true,
				removeComments: true,
			},
			hash: true,
		}),
		new HtmlWebpackPlugin({
			filetype: 'pug',
			filename: 'server-response.html',
			template: './src/pug/server-response.pug',
			chunks: ['server-response'],
			minify: {
				removeAttributeQuotes: true,
				collapseWhitespace: true,
				removeComments: true,
			},
			hash: true,
		}),
		// new HtmlWebpackInlineSVGPlugin(),
		new WorkboxPlugin.GenerateSW({
			// these options encourage the ServiceWorkers to get in there fast 
			// and not allow any straggling "old" SWs to hang around	 
			clientsClaim: true,	 
			skipWaiting: true,	 
		  }),
	],
	module: {
		rules: [
			{
				test: /\.less$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
			},
		],
	},
});
