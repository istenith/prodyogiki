const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: {
		app: './src/scripts/app.js',
		'server-response': './src/scripts/server-response.js',
		// vendor: './src/scripts/vendor.js',
	},
	plugins: [new CopyPlugin([{ from: './src/root/', to: './' }])],
	target: 'web',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.pug$/,
				use: ['html-loader', 'pug-html-loader'],
			},
			{
				test: /\.(svg|png|jpg|gif)/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'imgs',
						esModule: false,
					},
				},
			},
		],
	},
};
